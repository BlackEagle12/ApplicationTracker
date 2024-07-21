using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;


namespace ApplicationTracker.Mapper
{
    public class EmailTemplateMapper
    {
        public List<EmailTemplateListDto> GetEmailTemplateDtoList(List<EmailTemplate> emailTemplatList)
        {
            return 
                emailTemplatList.Select(emailTemplate =>
                    new EmailTemplateListDto
                    {
                        Id = emailTemplate.Id,
                        UserId = emailTemplate.UserId,
                        Subject = emailTemplate.Subject,
                        Name = emailTemplate.Name,
                        LastModifyed = emailTemplate.LastUpdatedOn ?? emailTemplate.AddedOn
                    })
                .ToList();
        }
    }
}
