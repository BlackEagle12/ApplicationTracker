using System.Net.Mail;

namespace ApplicationTracker.Dto
{
    public class EmailDto
    {
        public string? Subject { get; set; } 
        public string? Body { get; set; } 
        public List<EmailRecipient>? Recipients { get; set; }
        public List<Attachment> Attachments { get; set; }
    }

    public class EmailRecipient
    {
        public string RecipientEmail { get; set; }
        public string DisplayName { get; set; }

    }
}
