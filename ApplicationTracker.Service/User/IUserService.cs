
using ApplicationTracker.Data;

namespace ApplicationTracker.Service
{
    public interface IUserService 
    {
        Task AddUserAsync(User user);
        Task<User> getUserByIdAsync(int id);
        Task<bool> SendOtpToUser(string email);
    }
}
