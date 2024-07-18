using ApplicationTracker.Dto;
using Microsoft.Extensions.Options;
using System.Net.Mail;
using System.Net;
using ApplicationTracker.Dto.Models;
using ApplicationTracker.Repo;
using ApplicationTracker.Mapper;
using Microsoft.EntityFrameworkCore;

namespace ApplicationTracker.Service
{
    public class CommonService : ICommonService
    {
        private bool _disposed;
        private readonly EmailConfigurations _emailConfigurations;
        private readonly IRepository<RefEnumType> _refEnumTypeRepository;
        private readonly IRepository<RefEnumValue> _refEnumValueRepository;
        private readonly RefEnumTypeMapper _refEnumTypeMapper;
        private readonly RefEnumValueMapper _refEnumValueMapper;

        public CommonService(
                    IOptions<EmailConfigurations> emailConfigurations,
                    IRepository<RefEnumType> refEnumTypeRepository,
                    IRepository<RefEnumValue> refEnumValueRepository,
                    RefEnumTypeMapper refEnumTypeMapper,
                    RefEnumValueMapper refEnumValueMapper)
        {
            _disposed = false;
            _emailConfigurations = emailConfigurations.Value;
            _refEnumTypeRepository = refEnumTypeRepository;
            _refEnumValueRepository = refEnumValueRepository;
            _refEnumTypeMapper = refEnumTypeMapper;
            _refEnumValueMapper = refEnumValueMapper;
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

        public async Task<bool> SendEmail(EmailDto emailDto)
        {
            MailMessage email = new MailMessage();
            MailAddress from = new MailAddress(
                _emailConfigurations.Username!, 
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
            smtp.Host = _emailConfigurations.Host!;
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

        public async Task<RefEnumTypeDto> GetRefEnumType(Enums.RefEnumType type)
        {
            var refEnumType = 
                    await _refEnumTypeRepository
                        .Select(x =>
                            x.EnumType.Equals(Enums.RefEnumType.EmailAppPassword.ToString())
                        ).FirstOrDefaultAsync();

            return refEnumType == null
                ? throw new ApiException(HttpStatusCode.Conflict, "Ref Enum Type not found")
                : await Task.FromResult(_refEnumTypeMapper.GetRefEnumTypeDto(refEnumType));
        }

        public async Task<RefEnumValueDto?> GetRefEnumValueById(int id)
        {
            var refEnumValue =
                    await _refEnumValueRepository
                    .GetByIdAsync(id);

            return refEnumValue == null
                ? null
                : await Task.FromResult(_refEnumValueMapper.GetRefEnumValueDto(refEnumValue));
        }

        public async Task<RefEnumValueDto> AddRefEnumValue(RefEnumValue refEnumValue)
        {
            await _refEnumValueRepository.InsertAsync(refEnumValue);
            await _refEnumValueRepository.SaveChangesAsync();
            return await Task.FromResult(_refEnumValueMapper.GetRefEnumValueDto(refEnumValue));
        }
    }
}
