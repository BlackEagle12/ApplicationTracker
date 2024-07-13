using ApplicationTracker.Dto;
using ApplicationTracker.Service;
using Microsoft.AspNetCore.Mvc;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApplicationTracker.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(
                IUserService userService
            )
        {
            _userService = userService;
        }


        // GET api/<UserController>/5
        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            return Ok(new ApiResponce(
                    HttpStatusCode.OK,
                    user
                ));

        }

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserDto userDto)
        {
            var user = await _userService.UpdateUserAsync(id, userDto);
            return Ok(new ApiResponce(
                            HttpStatusCode.OK,
                            user
                        ));
        }
    }
}
