using ApplicationTracker.Service;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationTracker.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        AuthController(
                IUserService userService
            )
        {
            _userService = userService;
        }
        [HttpGet("sendinvitation")]
        public async Task<IActionResult> sendInvitationToUser([FromBody] string email)
        {
            var invitationSent = _userService.SendOtpToUser(email);
            throw new NotImplementedException();
        }

    }
}
