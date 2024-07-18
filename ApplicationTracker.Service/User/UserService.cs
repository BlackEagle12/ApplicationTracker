
using ApplicationTracker.Dto.Models;
using ApplicationTracker.Dto;
using ApplicationTracker.Mapper;
using ApplicationTracker.Repo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Net;
using static ApplicationTracker.Dto.Enums;

namespace ApplicationTracker.Service
{
    public class UserService : IUserService
    {
        private bool _disposed;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<UserSetting> _userSettingRepository;
        private readonly UserMapper _userMapper;
        private readonly ICommonService _commonService;
        public UserService(
                        IOptions<EmailConfigurations> emailConfigurations,
                        IRepository<User> userRepository,
                        IRepository<UserSetting> userSettingRepository,
                        UserMapper userMapper,
                        ICommonService commonService)
        {
            _disposed = false;
            _userRepository = userRepository;
            _userMapper = userMapper;
            _userSettingRepository = userSettingRepository;
            _commonService = commonService;
        }

        public void Dispose()
        {
            if (_disposed)
                return;

            //if (_userRepository != null)
            //{
            //    _userRepository.Dispose();
            //}


            _disposed = true;
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

        public async Task<bool> IsUserExistAsync(string email)
        {
            return await _userRepository.Any(x => x.Email.Equals(email));
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

        public async Task<UserDto> GetUserByEmailAsync(string email)
        {
            var user = await _userRepository.Select(x => x.Email.Equals(email)).FirstOrDefaultAsync();
            if (user is null)
                throw new ApiException(HttpStatusCode.NotFound, $"User not found");
            return await Task.FromResult(_userMapper.GetUserDto(user));
        }

        public async Task<UserDto> AuthenticateUser(LoginCredentialDto credentials)
        {

            if (credentials == null || string.IsNullOrEmpty(credentials.Email) || string.IsNullOrEmpty(credentials.Password))
                throw new ApiException(HttpStatusCode.Unauthorized, "Invalid Credentials");

            var user = await GetUserByEmailAsync(credentials.Email);

            if (credentials.Email.ToLower().Equals(user.Email.ToLower()) && credentials.Password.Equals(user.Password))
                return await Task.FromResult(user);
            else
                throw new ApiException(HttpStatusCode.Unauthorized, "Invalid Credentials");
        }

        public async Task<UserDto> OnbordUserAsync(UserDto userDto)
        {
            return await UpdateUserAsync(0, userDto);
        }

        public async Task<UserDto> ResetPasswdAsync(LoginCredentialDto loginCredential)
        {
            var user = await GetUserByEmailAsync(loginCredential.Email);
            user.Password = loginCredential.Password;
            return await UpdateUserAsync(0, user);
        }

        public async Task<bool> IsAppPasswordAvailable(int userId)
        {
            var refEnumType = await _commonService.GetRefEnumType(Enums.RefEnumType.EmailAppPassword);

            var userSettings = 
                    await _userSettingRepository
                        .Select(
                            x => x.RefEnumTypeId.Equals(refEnumType.Id)
                            && x.UserId.Equals(userId)
                        ).FirstOrDefaultAsync();

            if (userSettings == null)
                return false;

            var refEnumValue = await _commonService.GetRefEnumValueById(userSettings.RefEnumValueId);

            return refEnumValue != null;
        }

        public async Task SetEmailAppPassword(int userId, string appPassword)
        {
            var refEnumType = await _commonService.GetRefEnumType(Enums.RefEnumType.EmailAppPassword);

            var refEnumValueModel = new RefEnumValue
            {
                EnumTypeId = refEnumType.Id,
                EnumValue = appPassword,
                Description = "Email app password of user",
                AddedOn = DateTime.UtcNow
            };

            var refEnumValue = await _commonService.AddRefEnumValue(refEnumValueModel);

            var userSettingsModel = new UserSetting
            {
                UserId = userId,
                RefEnumTypeId = refEnumType.Id,
                RefEnumValueId = refEnumValue.Id,
                AddedOn = DateTime.UtcNow
            };

            await _userSettingRepository.InsertAsync(userSettingsModel);
            await _userSettingRepository.SaveChangesAsync();
        }
    }
}
