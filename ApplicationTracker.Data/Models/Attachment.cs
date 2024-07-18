using System;
using System.Collections.Generic;

namespace ApplicationTracker.Data.Models;

public partial class Attachment
{
    public int Id { get; set; }

    public int EmailTemplateId { get; set; }

    public string AttachmentName { get; set; } = null!;

    public DateTime AddedOn { get; set; }

    public DateTime? LastUpdatedOn { get; set; }
}
