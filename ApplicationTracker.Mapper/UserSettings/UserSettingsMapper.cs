using ApplicationTracker.Dto;
using ApplicationTracker.Dto.Models;

namespace ApplicationTracker.Mapper;

public class UserSettingsMapper
{
    public UserSettingsDto? GetUserSettingsDto(UserSetting? userSetting)
    {
        if (userSetting == null)
            return null;
        else
            return new UserSettingsDto
            {
                Id = userSetting.Id,
                UserId = userSetting.UserId,
                RefEnumTypeId = userSetting.RefEnumTypeId,
                RefEnumValueId = userSetting.RefEnumValueId,
            };
    }
}
