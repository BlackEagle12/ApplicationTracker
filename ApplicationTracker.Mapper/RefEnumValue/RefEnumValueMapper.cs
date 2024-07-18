using ApplicationTracker.Dto;
using ApplicationTracker.Dto.Models;

namespace ApplicationTracker.Mapper
{
    public class RefEnumValueMapper
    {
        public RefEnumValueDto GetRefEnumValueDto(RefEnumValue value)
        {
            return new RefEnumValueDto
            {
                Id = value.Id,
                EnumTypeId = value.EnumTypeId,
                EnumValue = value.EnumValue,
                Description = value.Description
            };
        }
    }
}
