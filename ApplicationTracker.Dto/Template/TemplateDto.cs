using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTracker.Dto.Template
{
    public class TemplateDto
    {
        
        public int Id { get; set; }
        
        public int UserId { get; set; }
        
        public string TemplateName { get; set; } = null!;
        
        public string Subject { get; set; } = null!;
        
        public string Body { get; set; } = null!;
        
        public bool IsHtml { get; set; }

        public IFormFileCollection? Attachments { get; set; }
    }
}
