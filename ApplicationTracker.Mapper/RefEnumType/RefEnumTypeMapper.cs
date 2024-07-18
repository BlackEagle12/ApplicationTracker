using ApplicationTracker.Dto.Models;
using ApplicationTracker.Dto;

namespace ApplicationTracker.Mapper
{
    public class RefEnumTypeMapper
    {
        public RefEnumTypeDto GetRefEnumTypeDto(RefEnumType type)
        {
            return new RefEnumTypeDto
            {
                Id = type.Id,
                EnumType = type.EnumType,
                Description = type.Description
            };
        }
    }
}
