using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;
using ApplicationTracker.Mapper;
using ApplicationTracker.Repo;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace ApplicationTracker.Service
{
    public class TemplateService : ITemplateService
    {
        private bool _disposed;
        private IWebHostEnvironment _hostingEnvironment;
        private IRepository<EmailTemplate> _emailTemplateRepository;
        private IRepository<User> _userRepository;
        private IRepository<UserSetting> _userSettingRepository;
        private EmailTemplateMapper _emailTemplateMapper;
        private ICommonService _commonService;
        public TemplateService(
                IRepository<EmailTemplate> emailTemplateRepository,
                IWebHostEnvironment hostingEnvironment,
                IRepository<User> userRepository,
                EmailTemplateMapper emailTemplateMapper,
                ICommonService commonService,
                IRepository<UserSetting> userSettingRepository)
        {
            _disposed = false;
            _emailTemplateRepository = emailTemplateRepository;
            _hostingEnvironment = hostingEnvironment;
            _userRepository = userRepository;
            _emailTemplateMapper = emailTemplateMapper;
            _commonService = commonService;
            _userSettingRepository = userSettingRepository;
        }

        public void Dispose()
        {
            if (_disposed)
                return;
            _disposed = true;
        }

        public async Task AddTemplateAsync(AddEmailTemplateDto template)
        {
            var user = await _userRepository
                .Select(x => x.Email.ToLower().Equals(template.UserEmail))
                .FirstOrDefaultAsync();

            if (user == null)
                throw new ApiException(System.Net.HttpStatusCode.BadRequest, "user not found");

            var emailTemplate = new EmailTemplate
            {
                UserId = user.Id,
                Name = template.TemplateName,
                Subject = template.Subject,
                Body = template.Body,
                IsHtml = template.IsHtml,
                AddedOn = DateTime.UtcNow
            };

            await _emailTemplateRepository.InsertAsync(emailTemplate);
            await _emailTemplateRepository.SaveChangesAsync();

            string uploads = Path.Combine(_hostingEnvironment.ContentRootPath, "Files", "Attachments", template.UserEmail.ToString(), emailTemplate.Id.ToString());

            if (Directory.Exists(uploads))
            {
                DirectoryInfo directory = new DirectoryInfo(uploads);
                foreach (FileInfo file in directory.GetFiles())
                {
                    file.Delete();
                }
                foreach (DirectoryInfo dir in directory.GetDirectories())
                {
                    dir.Delete(true);
                }
            }
            else
                Directory.CreateDirectory(uploads);

            for (int i = 0; i < template.Attachments?.Count; i++)
            {
                IFormFile? file = template.Attachments[i];
                if (file.Length > 0)
                {
                    string filePath = Path.Combine(uploads, file.FileName);
                    using (var fileStream = File.OpenWrite(filePath))
                    {
                        file.CopyTo(fileStream);
                    }
                }
            }
        }

        public async Task<List<EmailTemplateListDto>> GetAllTemplateAsync(int userId)
        {
            var emailTemplates = _emailTemplateRepository.Select(x => x.UserId.Equals(userId)).ToList();
            return await Task.FromResult(_emailTemplateMapper.GetEmailTemplateDtoList(emailTemplates));
        }

        public async Task DeleteTemplateAsync(int templateId)
        {
            var template = await _emailTemplateRepository.GetByIdAsync(templateId) ?? throw new ApiException(HttpStatusCode.NotFound, "Template not found");
            var user = await _userRepository.GetByIdAsync(template.UserId) ?? throw new ApiException(HttpStatusCode.Conflict, "User not found");
            
            string uploads = Path.Combine(_hostingEnvironment.ContentRootPath, "Files", "Attachments", user.Email.ToString(), template.Id.ToString());

            if (Directory.Exists(uploads))
            {
                DirectoryInfo directory = new DirectoryInfo(uploads);
                foreach (FileInfo file in directory.GetFiles())
                {
                    file.Delete();
                }
                foreach (DirectoryInfo dir in directory.GetDirectories())
                {
                    dir.Delete(true);
                }
            }
            
            _emailTemplateRepository.Delete(template);
            await _emailTemplateRepository.SaveChangesAsync();
        }

        public async Task SendEmailUsingTemplateAsync(int templateId, List<string> recipients)
        {
            var template = await _emailTemplateRepository.GetByIdAsync(templateId) ?? throw new ApiException(HttpStatusCode.NotFound, "Template not found");
            var user = await _userRepository.GetByIdAsync(template.UserId) ?? throw new ApiException(HttpStatusCode.Conflict, "User not found");
            var emialAppPasswordRefEnumType = await _commonService.GetRefEnumType(Enums.RefEnumType.EmailAppPassword);
            var userSetting = await _userSettingRepository
                                    .Select(
                                        x => x.UserId.Equals(user.Id)
                                        && x.RefEnumTypeId.Equals(emialAppPasswordRefEnumType.Id)
                                    )
                                    .FirstOrDefaultAsync()
                                    ?? throw new ApiException(HttpStatusCode.Conflict, "AppPassword not found");

            var refEnumValue = await _commonService.GetRefEnumValueById(userSetting.RefEnumValueId);

            if(refEnumValue == null || string.IsNullOrEmpty(refEnumValue.EnumValue))
                throw new ApiException(HttpStatusCode.Conflict, "AppPassword not found");

            var appPassword = refEnumValue.EnumValue;

            var attachments = new List<System.Net.Mail.Attachment>();
            string uploads = Path.Combine(_hostingEnvironment.ContentRootPath, "Files", "Attachments", user.Email.ToString(), template.Id.ToString());
            if (Directory.Exists(uploads))
            {
                DirectoryInfo directory = new DirectoryInfo(uploads);
                foreach (FileInfo file in directory.GetFiles())
                {
                    attachments.Add(new System.Net.Mail.Attachment(Path.Combine(uploads, file.Name)));
                }
            }

            foreach (var recipient in recipients)
            {
                var emailDto = new EmailDto
                {
                    Subject = template.Subject,
                    Body = template.Body,
                    IsHtml = template.IsHtml,
                    Recipients = new List<EmailUser>() { new EmailUser { Email = recipient } },
                    Sender = new EmailUser { Email = user.Email, DisplayName = user.FirstName! + " " + user.LastName },
                    Attachments = attachments
                };
                await _commonService.SendEmail(emailDto, false, appPassword);
            }
        }
    }
}
