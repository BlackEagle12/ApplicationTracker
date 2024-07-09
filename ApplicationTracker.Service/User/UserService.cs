
using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;
using ApplicationTracker.Repo;
using Microsoft.EntityFrameworkCore;
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

        public async Task AddUserAsync(UserDto user)
        {

            if (user == null)
                throw new ApiException(HttpStatusCode.BadRequest, "can not add null user");

            user.Id = 0;

            var existingUser = _userRepository.Select(x => x.Email.Equals(user.Email)).FirstOrDefault();
            if (existingUser != null)
                throw new ApiException(HttpStatusCode.Conflict, $"{user.Email} already registered");

            await _userRepository.InsertAsync(new User
            {
                Email = user.Email,
                Password = user.Password,
                FirstName = user.FirstName,
                LastName = user.LastName,
                TempToken = user.TempToken.ToString(),
                IsVerified = false,
                AddedOn = DateTime.UtcNow
            });

            await _userRepository.SaveChangesAsync();
        }

        public async Task<bool> IsUserExist(string email)
        {
            var existingUser = await _userRepository.Select(x => x.Email.Equals(email)).FirstOrDefaultAsync();

            if (existingUser != null)
                return true;
            else
                return false;
        }

        public async Task<User> getUserByIdAsync(int id)
        {
            //var user = await _userRepository.GetByIdAsync(id);
            //if (user is null)
            //    throw new ApiException(HttpStatusCode.NotFound, $"User not found with userId : {id} ");
            //return user;

            throw new NotImplementedException();
        }
    }
}
