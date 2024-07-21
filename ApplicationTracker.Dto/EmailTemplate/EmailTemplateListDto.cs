using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTracker.Dto
{
    public class EmailTemplateListDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Name { get; set; } = null!;

        public string Subject { get; set; } = null!;

        public DateTime LastModifyed { get; set; }
    }
}
