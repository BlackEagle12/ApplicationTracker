using ApplicationTracker.Dto;
using Microsoft.Extensions.Options;

namespace ApplicationTracker.Service
{
    public class AuthService : BaseService, IAuthService
    {
        private bool _disposed;
        public AuthService(
            IOptions<EmailConfigurations> emailConfigurations
            ) :base( emailConfigurations )
        {

        }

        public override void Dispose()
        {
            if (_disposed)
                return;

            //if (_repoVendor != null)
            //{
            //    _repoVendor.Dispose();
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
    }
}
