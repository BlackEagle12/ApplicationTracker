using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;
using ApplicationTracker.Repo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net;

namespace ApplicationTracker.Service
{
    public class AuthService : BaseService, IAuthService
    {
        private bool _disposed;
        private readonly IRepository<User> _userRepository;
        public AuthService(
                IOptions<EmailConfigurations> emailConfigurations,
                IRepository<User> userRepository
            ) :base( emailConfigurations )
        {
            _disposed = false;
            _userRepository = userRepository;
        }

        public override void Dispose()
        {
            if (_disposed)
                return;

            //if (_userRepository != null)
            //{
            //    _userRepository.Dispose();
            //}


            _disposed = true;
        }

        public async Task<int> SendOtpToUser(string email)
        {
            Random rnd = new Random();
            var otp = rnd.Next(100000, 999999);
            await SendEmail(
                    new()
                    {
                        Subject = "Invitation From Application Tracker",
                        Body = $"Hi, OTP for sign up is {otp}, If you didn't tried for signup in application tracker don't worry!! Please don't share this OTP with anyone",
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

        public async Task<bool> verifyInvitation(VerifyInvitationDto verifyInvitationDto)
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
    }
}
