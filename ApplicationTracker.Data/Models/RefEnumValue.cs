using System;
using System.Collections.Generic;

namespace ApplicationTracker.Data.Models;

public partial class RefEnumValue
{
    public int Id { get; set; }

    public int EnumTypeId { get; set; }

    public string EnumValue { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime AddedOn { get; set; }

    public DateTime? LastUpdatedOn { get; set; }
}
