
using ApplicationTracker.Data;
using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;

namespace ApplicationTracker.Service
{
    public interface IUserService 
    {
        Task AddUserAsync(UserDto user);
        Task<bool> IsUserExist(string email);
        Task<User> getUserByIdAsync(int id);
    }
}
