using ApplicationTracker.Dto.Models;
using ApplicationTracker.Dto;
using ApplicationTracker.Mapper;
using ApplicationTracker.Repo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace ApplicationTracker.Service
{
    public class AuthService : IAuthService
    {
        private bool _disposed;
        private readonly IRepository<User> _userRepository;
        private readonly AuthMapper _authMapper;
        private readonly AppSettings _appSettings;
        private readonly ICommonService _commonService;
        public AuthService(
                IRepository<User> userRepository,
                AuthMapper authMapper,
                IOptions<AppSettings> appSettings,
                ICommonService commonService)
        {
            _disposed = false;
            _userRepository = userRepository;
            _authMapper = authMapper;
            _appSettings = appSettings.Value;
            _commonService = commonService;
        }

        public void Dispose()
        {
            if (_disposed)
                return;

            //if (_userRepository != null)
            //{
            //    _userRepository.Dispose();
            //}


            _disposed = true;
        }

        public async Task<int> SendPasswordOtpToUser(string email, bool isResetPassword = false)
        {
            Random rnd = new Random();
            var otp = rnd.Next(100000, 999999);
            await _commonService.SendEmail(
                    new()
                    {
                        Subject = "Invitation From Application Tracker",
                        Body = $"Hi, OTP for {(isResetPassword ? "reset password" : "sign up")} is {otp}, If you didn't tried for {(isResetPassword ? "reset password" : "sign up")} in application tracker don't worry!! Please don't share this OTP with anyone",
                        Recipients = new()
                            {
                                new()
                                {
                                    RecipientEmail = email
                                }
                            }
                    }
                );

            return otp;
        }

        public async Task<bool> VerifyInvitation(VerifyInvitationDto verifyInvitationDto)
        {
            var user = await _userRepository.Select(x => x.Email.Equals(verifyInvitationDto.Email)).FirstOrDefaultAsync();


            if (user == null)
                throw new ApiException(HttpStatusCode.NotFound, "No invitation found with given email");

            if (user.IsVerified)
                throw new ApiException(HttpStatusCode.Conflict, "User is already verified");

            if (user.TempToken == null || !user.TempToken.Equals(verifyInvitationDto.token.ToString()))
                throw new ApiException(HttpStatusCode.Unauthorized, "Invalid otp!");

            user.IsVerified = true;
            user.LastUpdatedOn = DateTime.UtcNow;
            user.TempToken = null;

            _userRepository.Update(user);
            await _userRepository.SaveChangesAsync();

            return true;
        }

        public AuthResponceDto GetAuthResponce(UserDto user)
        {
            SecurityTokenDescriptor tokenDescriptor = GetTokenDescriptor(user);
            var tokenHandler = new JsonWebTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);

            return _authMapper.GetAuthResponceDto(user, securityToken);
        }

        private SecurityTokenDescriptor GetTokenDescriptor(UserDto user)
        {
            var encryptionKey = Encryption.GetEncryptionKey(_appSettings.RSAEncryptionKey);// public key for encryption, private key for decryption
            var signingKey = Encryption.GetSigningKey(ECCurve.NamedCurves.nistP256);// private key for signing, public key for validation

            var encryptionKid = _appSettings.EncryptionKid;
            var signingKid = _appSettings.SigningKid;

            var publicEncryptionKey = new RsaSecurityKey(encryptionKey.ExportParameters(false)) { KeyId = encryptionKid };
            var privateSigningKey = new ECDsaSecurityKey(signingKey) { KeyId = signingKid };

            const int expiringDays = 1;

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = "api1",
                Issuer = "https://idp.example.com",
                Expires = DateTime.UtcNow.AddDays(expiringDays),
                SigningCredentials = new SigningCredentials(privateSigningKey, SecurityAlgorithms.EcdsaSha256),
                EncryptingCredentials = new EncryptingCredentials(publicEncryptionKey, SecurityAlgorithms.RsaOAEP, SecurityAlgorithms.Aes256CbcHmacSha512),
                Claims = new Dictionary<string, object> {
                        { "id", Convert.ToString(user.Id) },
                        { "Email", user.Email}
                    },
            };

            return tokenDescriptor;
        }
    }
}
