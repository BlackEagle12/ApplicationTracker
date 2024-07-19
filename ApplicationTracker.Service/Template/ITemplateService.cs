using ApplicationTracker.Dto.Template;

namespace ApplicationTracker.Service
{
    public interface ITemplateService: IDisposable
    {
        Task<TemplateDto> AddTemplate(TemplateDto template);
    }
}
