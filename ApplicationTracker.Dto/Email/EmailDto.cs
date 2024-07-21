using System.Net.Mail;

namespace ApplicationTracker.Dto
{
    public class EmailDto
    {
        public string? Subject { get; set; } 
        public string? Body { get; set; } 
        public bool IsHtml {  get; set; }
        public List<EmailUser>? Recipients { get; set; }
        public EmailUser? Sender { get; set; }
        public List<Attachment> Attachments { get; set; }
    }

    public class EmailUser
    {
        public string Email { get; set; }
        public string DisplayName { get; set; }

    }
}
