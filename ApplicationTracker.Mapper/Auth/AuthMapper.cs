using ApplicationTracker.Dto;

namespace ApplicationTracker.Mapper;

public class AuthMapper
{
    public AuthResponceDto GetAuthResponceDto(UserDto userDto, string token)
    {
        return new AuthResponceDto
        {
            Id = userDto.Id,
            Email = userDto.Email,
            FirstName = userDto?.FirstName,
            LastName = userDto?.LastName,
            Token = token
        };
    }
}
