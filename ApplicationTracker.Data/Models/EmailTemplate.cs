using System;
using System.Collections.Generic;

namespace ApplicationTracker.Data.Models;

public partial class EmailTemplate
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string Name { get; set; } = null!;

    public string Subject { get; set; } = null!;

    public string Body { get; set; } = null!;

    public bool IsHtml { get; set; }

    public DateTime AddedOn { get; set; }

    public DateTime? LastUpdatedOn { get; set; }
}
