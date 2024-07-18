
using ApplicationTracker.Dto;
using ApplicationTracker.Dto.Models;

namespace ApplicationTracker.Service
{
    public interface IUserService: IDisposable
    {
        Task<UserDto> AddUserAsync(UserDto user);
        Task<bool> IsUserExistAsync(string email);
        Task<UserDto> GetUserByIdAsync(int id);
        Task<UserDto> UpdateUserAsync(int id, UserDto userDto);
        Task<UserDto> GetUserByEmailAsync(string email);
        Task<UserDto> AuthenticateUser(LoginCredentialDto credentials);
        Task<UserDto> OnbordUserAsync(UserDto userDto);
        Task<UserDto> ResetPasswdAsync(LoginCredentialDto loginCredential);
        Task<bool> IsAppPasswordAvailable(int userId);
        Task SetEmailAppPassword(int userId, string appPassword);
    }
}
