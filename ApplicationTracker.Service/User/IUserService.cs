
using ApplicationTracker.Data;
using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;

namespace ApplicationTracker.Service
{
    public interface IUserService
    {
        Task<UserDto> AddUserAsync(UserDto user);
        Task<bool> IsUserExistAsync(string email);
        Task<UserDto> GetUserByIdAsync(int id);
        Task<UserDto> UpdateUserAsync(int id, UserDto userDto);
        Task<UserDto> GetUserByEmailAsync(string email);
        Task<UserDto> AuthenticateUser(LoginCredentialDto credentials);
        Task<UserDto> OnbordUserAsync(UserDto userDto);
        Task<UserDto> ResetPasswdAsync(LoginCredentialDto loginCredential);
    }
}
