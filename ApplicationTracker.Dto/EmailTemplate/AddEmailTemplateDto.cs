using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTracker.Dto
{
    public class AddEmailTemplateDto
    {
        
        public int Id { get; set; }
        
        public string UserEmail { get; set; }
        
        public string TemplateName { get; set; } = null!;
        
        public string Subject { get; set; } = null!;
        
        public string Body { get; set; } = null!;
        
        public bool IsHtml { get; set; }

        public List<IFormFile>? Attachments { get; set; }
    }
}
