using ApplicationTracker.Dto.Models;
using ApplicationTracker.Dto;

namespace ApplicationTracker.Mapper;

public class UserMapper
{
    public UserDto GetUserDto(User user)
    {
        return new UserDto
        {
            Id = user.Id,
            Email = user.Email,
            Password = user.Password,
            FirstName = user.FirstName,
            LastName = user.LastName,
            IsVerified = user.IsVerified,
            TempToken = Convert.ToInt32(user.TempToken),
            AddedOn = user.AddedOn,
            LastUpdatedOn = user.LastUpdatedOn
        };
    }

    public User GetUser(UserDto userDto)
    {

        return new User
        {
            Id = userDto.Id,
            Email = userDto.Email,
            FirstName = userDto.FirstName,
            LastName = userDto.LastName,
            IsVerified = userDto.IsVerified,
            Password = userDto.Password,
            AddedOn = userDto.AddedOn,
            LastUpdatedOn = userDto.LastUpdatedOn,
            TempToken = userDto.TempToken.ToString()
        };
    }
}
