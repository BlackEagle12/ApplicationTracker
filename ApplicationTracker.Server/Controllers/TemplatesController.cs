using ApplicationTracker.Dto.Template;
using ApplicationTracker.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [HttpPost]
        public async Task<IActionResult> AddTemplate([FromForm]TemplateDto templateDto)
        {
            var template = _templateService.AddTemplate(templateDto);
            return Ok();
        }
    }
}
