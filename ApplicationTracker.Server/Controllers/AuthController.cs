using ApplicationTracker.Dto;
using ApplicationTracker.Service;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ApplicationTracker.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserService _userService;
        public AuthController(
                IAuthService authService,
                IUserService userService
            )
        {
            _authService = authService;
            _userService = userService;
        }

        [HttpPost("sendinvitation")]
        public async Task<IActionResult> sendInvitationToUser([FromBody] string email)
        {

            var isUserExist = await _userService.IsUserExistAsync(email);

            if (isUserExist)
            {
                var user = await _userService.GetUserByEmailAsync(email);
                if (!string.IsNullOrEmpty(user.Password))
                    throw new ApiException(
                        HttpStatusCode.Conflict,
                        "User already registered"
                    );
            }

            var otp = await _authService.SendPasswordOtpToUser(email);

            if (!isUserExist)
            {
                await _userService.AddUserAsync(new UserDto
                {
                    Email = email,
                    TempToken = otp
                });
            }
            else
            {
                await _userService.UpdateUserAsync(0, new UserDto
                {
                    Email = email,
                    TempToken = otp,
                });
            }

            return Ok(new ApiResponce(
                    HttpStatusCode.OK,
                    "otp sent successfully"
                ));
        }

        [HttpPost("verifyInvitation")]
        public async Task<IActionResult> VerifyInvitation([FromBody] VerifyInvitationDto verifyInvitationDto)
        {
            await _authService.VerifyInvitation(verifyInvitationDto);
            return Ok(new ApiResponce(
                            HttpStatusCode.OK,
                            "Invitation verified sucessfully!!!"
                        ));
        }

        [HttpPost("onborduser")]
        public async Task<IActionResult> OnbordUser([FromBody] UserDto userDto)
        {
            var updatedUser = await _userService.OnbordUserAsync(userDto);
            var authResponceDto = _authService.GetAuthResponce(updatedUser);

            return Ok(new ApiResponce(
                            HttpStatusCode.OK,
                            authResponceDto
                        ));
        }

        [HttpPost("authenticateuser")]
        public async Task<IActionResult> AuthenticateUser([FromBody] LoginCredentialDto credentials)
        {
            var user = await _userService.AuthenticateUser(credentials);
            var authResponceDto = _authService.GetAuthResponce(user);
            return Ok(new ApiResponce(
                HttpStatusCode.OK,
                authResponceDto
            ));
        }

        [HttpPost("sendresetpasswordtoken")]
        public async Task<IActionResult> SendResetPasswordToken([FromBody] string email)
        {
            var user = await _userService.GetUserByEmailAsync(email);
            var otp = await _authService.SendPasswordOtpToUser(email, true);

            await _userService.UpdateUserAsync(user.Id, new UserDto
            {
                Email = user.Email,
                Password = null,
                TempToken = otp,
                FirstName = user.FirstName,
                LastName = user.LastName,
                IsVerified = false
            });

            return Ok(new ApiResponce(
                HttpStatusCode.OK,
                "otp sent successfully"
            ));
        }

        [HttpPost("resetpassword")]
        public async Task<IActionResult> ResetPassword([FromBody] LoginCredentialDto loginCredential)
        {
            var user = await _userService.ResetPasswdAsync(loginCredential);
            var authResponceDto = _authService.GetAuthResponce(user);
            return Ok(new ApiResponce(
                            HttpStatusCode.OK,
                            authResponceDto
                        ));
        }
    }
}
