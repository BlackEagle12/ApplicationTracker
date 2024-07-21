using ApplicationTracker.Dto;

namespace ApplicationTracker.Service
{
    public interface ITemplateService: IDisposable
    {
        Task AddTemplateAsync(AddEmailTemplateDto template);
        Task DeleteTemplateAsync(int templateId);
        Task<List<EmailTemplateListDto>> GetAllTemplateAsync(int userId);
        Task SendEmailUsingTemplateAsync(int templateId, List<string> recipients);
        //Task<EmailTemplateDto> GetTemplateAsync(int templateId);
    }
}
