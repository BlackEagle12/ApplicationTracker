using System;
using System.Collections.Generic;

namespace ApplicationTracker.Data.Models;

public partial class UserSetting
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int RefEnumTypeId { get; set; }

    public int RefEnumValueId { get; set; }

    public DateTime AddedOn { get; set; }

    public DateTime? LastUpdatedOn { get; set; }
}
