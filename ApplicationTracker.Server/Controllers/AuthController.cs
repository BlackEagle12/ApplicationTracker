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
            try
            {
                var isUserExist = await _userService.IsUserExist(email);

                if (isUserExist)
                    throw new ApiException(
                        HttpStatusCode.Conflict,
                        "User already registered"
                    );

                var otp = await _authService.SendOtpToUser(email);

                await _userService.AddUserAsync(new UserDto
                {
                    Email = email,
                    TempToken = otp
                });

                return Ok(new ApiResponce(
                        HttpStatusCode.OK,
                        "otp sent successfully"
                    ));
            }
            catch (ApiException ex)
            {
                return StatusCode((int)ex.StatusCode, new ApiResponce(
                        ex.StatusCode,
                        ex.ErrorMessage
                    ));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ApiException(
                        HttpStatusCode.InternalServerError,
                        ex.Message
                    ));
            }
        }

        [HttpPost("verifyInvitation")]
        public async Task<IActionResult> VerifyInvitation([FromBody] VerifyInvitationDto verifyInvitationDto)
        {
            try
            {
                await _authService.VerifyInvitation(verifyInvitationDto);
                return Ok(new ApiResponce(
                                HttpStatusCode.OK,
                                "Invitation verified sucessfully!!!"
                            ));

            }
            catch (ApiException ex)
            {
                return StatusCode((int)ex.StatusCode, new ApiResponce(
                        ex.StatusCode,
                        ex.ErrorMessage
                    ));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ApiException(
                        HttpStatusCode.InternalServerError,
                        ex.Message
                    ));
            }
        }

        [HttpPost("onborduser")]
        public async Task<IActionResult> OnbordUser([FromBody] UserDto userDto)
        {
            try
            {
                var updatedUser = await _userService.UpdateUserAsync(0, userDto);
                var authResponceDto = await _authService.OnbordUser(updatedUser);

                return Ok(new ApiResponce(
                                HttpStatusCode.OK,
                                authResponceDto
                            ));

            }
            catch (ApiException ex)
            {
                return StatusCode((int)ex.StatusCode, new ApiResponce(
                        ex.StatusCode,
                        ex.ErrorMessage
                    ));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ApiException(
                        HttpStatusCode.InternalServerError,
                        ex.Message
                    ));
            }
        }

        [HttpPost("authenticateuser")]
        public async Task<IActionResult> AuthenticateUser([FromBody] LoginCredentialDto credentials)
        {
            try
            {
                var user = await _userService.GetUserByEmail(credentials.Email);
                var authResponceDto = await _authService.AuthenticateUser(credentials, user);
                return Ok(new ApiResponce(
                    HttpStatusCode.OK,
                    authResponceDto
                ));
            }
            catch (ApiException ex)
            {
                return StatusCode((int)ex.StatusCode, new ApiResponce(
                        ex.StatusCode,
                        ex.ErrorMessage
                    ));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ApiException(
                        HttpStatusCode.InternalServerError,
                        ex.Message
                    ));
            }
        }
    }
}
