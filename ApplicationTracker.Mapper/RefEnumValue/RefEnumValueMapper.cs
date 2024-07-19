using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;

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

        public RefEnumValue GetRefEnumValue(RefEnumValueDto dto)
        {
            return new RefEnumValue
            {
                Id = dto.Id,
                EnumTypeId = dto.EnumTypeId,
                EnumValue = dto.EnumValue,
                Description = dto.Description
            };
        }
    }
}
