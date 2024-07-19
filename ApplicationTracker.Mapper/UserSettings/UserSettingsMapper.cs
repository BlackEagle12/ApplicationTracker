using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;

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
