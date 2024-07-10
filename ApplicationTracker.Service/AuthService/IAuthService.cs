using ApplicationTracker.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTracker.Service
{
    public interface IAuthService
    {
        Task<AuthResponceDto> AuthenticateUser(LoginCredentialDto credentials, UserDto user);
        Task<AuthResponceDto> OnbordUser(UserDto userDto);
        Task<int> SendOtpToUser(string email);
        Task<bool> VerifyInvitation(VerifyInvitationDto verifyInvitationDto);
    }
}
