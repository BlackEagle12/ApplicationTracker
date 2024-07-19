
using ApplicationTracker.Dto;

namespace ApplicationTracker.Service
{
    public interface IUserService : IDisposable
    {
        Task<UserDto> AddUserAsync(UserDto user);
        Task<bool> IsUserExistAsync(string email);
        Task<UserDto> GetUserByIdAsync(int id);
        Task<UserDto> UpdateUserAsync(int id, UserDto userDto);
        Task<UserDto> GetUserByEmailAsync(string email);
        Task<UserDto> AuthenticateUserAsync(LoginCredentialDto credentials);
        Task<UserDto> OnbordUserAsync(UserDto userDto);
        Task<UserDto> ResetPasswdAsync(LoginCredentialDto loginCredential);
        Task<bool> IsAppPasswordAvailableAsync(int userId);
        Task SetEmailAppPasswordAsync(int userId, string appPassword);
        Task<UserSettingsDto?> GetUserSettingsAsync(Enums.RefEnumType type, int userId);
        Task<UserSettingsDto> AddUpdateUserSettingsAsync(Enums.RefEnumType type, int userId, string value);
    }
}
