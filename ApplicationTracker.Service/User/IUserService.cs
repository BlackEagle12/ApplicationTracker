
using ApplicationTracker.Data;
using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;

namespace ApplicationTracker.Service
{
    public interface IUserService
    {
        Task<UserDto> AddUserAsync(UserDto user);
        Task<bool> IsUserExist(string email);
        Task<UserDto> GetUserByIdAsync(int id);
        Task<UserDto> UpdateUserAsync(int id, UserDto userDto);
        Task<UserDto> GetUserByEmail(string email);
    }
}
