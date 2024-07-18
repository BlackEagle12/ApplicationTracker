namespace ApplicationTracker.Dto
{
    public class RefEnumValueDto
    {
        public int Id { get; set; }

        public int EnumTypeId { get; set; }

        public string EnumValue { get; set; } = null!;

        public string? Description { get; set; }
    }
}
