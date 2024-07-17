using System;
using System.Collections.Generic;

namespace ApplicationTracker.Data.Models;

public partial class RefEnumType
{
    public int Id { get; set; }

    public string EnumType { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime AddedOn { get; set; }

    public DateTime? LastUpdatedOn { get; set; }
}
