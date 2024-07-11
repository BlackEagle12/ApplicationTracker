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
        Task<int> SendPasswordOtpToUser(string email, bool isResetPassword = false);
        Task<bool> VerifyInvitation(VerifyInvitationDto verifyInvitationDto);
        AuthResponceDto GetAuthResponce(UserDto user);
    }
}
