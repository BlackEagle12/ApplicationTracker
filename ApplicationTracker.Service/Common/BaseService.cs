using ApplicationTracker.Dto;
using Microsoft.Extensions.Options;
using System.Net.Mail;
using System.Net;

namespace ApplicationTracker.Service
{
    public abstract class BaseService : IBaseService
    {
        private readonly EmailConfigurations _emailConfigurations;
        public BaseService(
                IOptions<EmailConfigurations> emailConfigurations
            )
        {
            _emailConfigurations = emailConfigurations.Value;
        }
        public abstract void Dispose();

        public async Task<bool> SendEmail(EmailDto emailDto)
        {
            MailMessage email = new MailMessage();
            MailAddress from = new MailAddress(
                _emailConfigurations.Username, 
                _emailConfigurations.DisplayName
                );
            email.From = from;
            emailDto.Recipients?.ForEach(recipient =>
            {
                MailAddress to = new MailAddress(
                    recipient.RecipientEmail, 
                    recipient.DisplayName
                    );
                email.To.Add(to);
            });

            emailDto.Attachments?.ForEach(attachment =>
            {
                email.Attachments.Add(attachment);
            });


            email.Subject = emailDto.Subject;
            email.Body = emailDto.Body;

            SmtpClient smtp = new SmtpClient();
            smtp.Host = _emailConfigurations.Host;
            smtp.Port = _emailConfigurations.Port;
            smtp.Credentials = new NetworkCredential(
                _emailConfigurations.Username, 
                _emailConfigurations.Password
                );
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.EnableSsl = _emailConfigurations.EnableSSL;

            try
            {
                await smtp.SendMailAsync(email);
                return true;
            }
            catch (SmtpException ex)
            {
                throw new ApiException(
                        HttpStatusCode.BadGateway,
                        ex.Message
                    );
            }
        }
    }
}
