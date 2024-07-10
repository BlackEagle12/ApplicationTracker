
using ApplicationTracker.Data.Models;
using ApplicationTracker.Dto;
using ApplicationTracker.Mapper;
using ApplicationTracker.Repo;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace ApplicationTracker.Service
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;
        private readonly UserMapper _userMapper;
        public UserService(
                IRepository<User> userRepository,
                UserMapper userMapper
            )
        {
            _userRepository = userRepository;
            _userMapper = userMapper;
        }

        public async Task<UserDto> AddUserAsync(UserDto userDto)
        {

            if (userDto == null)
                throw new ApiException(HttpStatusCode.BadRequest, "can not add null user");

            userDto.Id = 0;

            var existingUser = _userRepository.Select(x => x.Email.Equals(userDto.Email)).FirstOrDefault();
            if (existingUser != null)
                throw new ApiException(HttpStatusCode.Conflict, $"{userDto.Email} already registered");

            var user = _userMapper.GetUser(userDto);

            user.IsVerified = false;
            user.AddedOn = DateTime.UtcNow;

            await _userRepository.InsertAsync(user);
            await _userRepository.SaveChangesAsync();

            return await Task.FromResult(_userMapper.GetUserDto(user));
        }

        public async Task<bool> IsUserExist(string email)
        {
            var existingUser = await _userRepository.Select(x => x.Email.Equals(email)).FirstOrDefaultAsync();

            if (existingUser != null)
                return true;
            else
                return false;
        }

        public async Task<UserDto> GetUserByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user is null)
                throw new ApiException(HttpStatusCode.NotFound, $"User not found with userId : {id} ");
            return await Task.FromResult(_userMapper.GetUserDto(user));
        }

        public async Task<UserDto> UpdateUserAsync(int id, UserDto userDto)
        {
            if (id == 0 && string.IsNullOrEmpty(userDto.Email))
                throw new ApiException(
                    HttpStatusCode.UnprocessableEntity,
                    "can not find user without id or email"
                    );

            User? user = null!;

            if (id != 0)
                user = await _userRepository.GetByIdAsync(id);
            else
                user = await _userRepository.Select(x => x.Email.Equals(userDto.Email)).FirstOrDefaultAsync();


            if (user == null)
                throw new ApiException(HttpStatusCode.NotFound, "No user found with given email");

            user.Email = userDto.Email;
            user.Password = userDto.Password;
            user.FirstName = userDto.FirstName;
            user.LastName = userDto.LastName;
            user.TempToken = userDto.TempToken.ToString();
            user.IsVerified = userDto.IsVerified;
            user.LastUpdatedOn = DateTime.UtcNow;

            _userRepository.Update(user);
            await _userRepository.SaveChangesAsync();

            return await Task.FromResult(_userMapper.GetUserDto(user));
        }

        public async Task<UserDto> GetUserByEmail(string email)
        {
            var user = await _userRepository.Select(x => x.Email.Equals(email)).FirstOrDefaultAsync();
            if (user is null)
                throw new ApiException(HttpStatusCode.NotFound, $"User not found with email : {email} ");
            return await Task.FromResult(_userMapper.GetUserDto(user));
        }
    }
}
