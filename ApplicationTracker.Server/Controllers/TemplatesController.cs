using ApplicationTracker.Dto;
using ApplicationTracker.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ApplicationTracker.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TemplatesController : ControllerBase
    {
        private readonly ITemplateService _templateService;
        public TemplatesController(ITemplateService templateService)
        {
            _templateService = templateService;
        }

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpPost("add")]
        public async Task<IActionResult> AddTemplate([FromForm] AddEmailTemplateDto templateDto)
        {
            await _templateService.AddTemplateAsync(templateDto);
            return Ok(new ApiResponce(HttpStatusCode.OK, "Template added sucessfully"));
        }

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpGet("all/{userId}")]
        public async Task<IActionResult> GetAllTemplate(int userId)
        {
            var templateDtoList = await _templateService.GetAllTemplateAsync(userId);
            return Ok(new ApiResponce(HttpStatusCode.OK, templateDtoList));
        }

        //[TypeFilter(typeof(AuthorizationFilter))]
        //[HttpGet("{templateId}")]
        //public async Task<IActionResult> GetTemplate(int templateId)
        //{
        //    var templateDto = await _templateService.GetTemplateAsync(templateId);
        //    return Ok(new ApiResponce(HttpStatusCode.OK, templateDto));
        //}

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpDelete("{templateId}")]
        public async Task<IActionResult> DeleteTemplate(int templateId)
        {
            await _templateService.DeleteTemplateAsync(templateId);
            return Ok(new ApiResponce(HttpStatusCode.OK, "Template Deleted Sucessfully"));
        }

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpPost("sendemail/{templateId}")]
        public async Task<IActionResult> SendEmail(int templateId, [FromBody] List<string> recipients)
        {
            await _templateService.SendEmailUsingTemplateAsync(templateId, recipients);
            return Ok(new ApiResponce(HttpStatusCode.OK, "Email processed sucessfully"));
        }

    }
}
