
using ApplicationTracker.Data;
using ApplicationTracker.Dto;
using ApplicationTracker.Repo;
using System.Net;

namespace ApplicationTracker.Service
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;
        public UserService(
                IRepository<User> userRepository
            )
        {
            _userRepository = userRepository;
        }

        public async Task AddUserAsync(User user)
        {
            //if(user == null)
            //    throw new ApiException(HttpStatusCode.BadRequest, "can not add null user");

            //user.Id = 0;
            
            //var existingUser = _userRepository.Select(x => x.Email.Equals(user.Email)).FirstOrDefault();
            //if (existingUser != null)
            //    throw new ApiException(HttpStatusCode.Conflict, $"{user.Email} already registered");

            //await _userRepository.InsertAsync(user);
            //await _userRepository.SaveChangesAsync();

            throw new NotImplementedException();
        }

        public async Task<User> getUserByIdAsync(int id)
        {
            //var user = await _userRepository.GetByIdAsync(id);
            //if (user is null)
            //    throw new ApiException(HttpStatusCode.NotFound, $"User not found with userId : {id} ");
            //return user;

            throw new NotImplementedException();
        }

        public async Task<bool> SendOtpToUser(string email)
        {
            throw new NotImplementedException();
        }
    }
}
