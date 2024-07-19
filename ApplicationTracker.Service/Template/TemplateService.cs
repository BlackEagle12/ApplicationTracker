using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto.Template;
using ApplicationTracker.Repo;

namespace ApplicationTracker.Service
{
    public class TemplateService : ITemplateService
    {
        private bool _disposed;
        private IRepository<EmailTemplate> _emailTemplateRepository {  get; set; }
        public TemplateService(IRepository<EmailTemplate> emailTemplateRepository)
        {
            _disposed = false;
            _emailTemplateRepository = emailTemplateRepository;
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

        public async Task<TemplateDto> AddTemplate(TemplateDto template)
        {
            var emailTemplate = new EmailTemplate
            {
                UserId = template.UserId,
                Name = template.TemplateName,
                Subject = template.Subject,
                Body = template.Body,
                IsHtml = template.IsHtml,
                AddedOn = DateTime.UtcNow
            };

            await _emailTemplateRepository.InsertAsync(emailTemplate);

            //Add Attachments
            foreach (var file in template.Attachments)
            {

            }

            return template;
        }
    }
}
