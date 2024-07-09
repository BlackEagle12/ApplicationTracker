using ApplicationTracker.Data;
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
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var user = await _userService.getUserByIdAsync(id);
                return Ok(new ApiResponce(
                        HttpStatusCode.OK,
                        user
                    ));
            }
            catch(ApiException ex)
            {
                return StatusCode((int)ex.StatusCode, new ApiResponce(
                        ex.StatusCode,
                        ex.ErrorMessage
                    ));
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiException(
                        HttpStatusCode.InternalServerError,
                        ex.Message
                    ));
            }

        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserDto user)
        {
            try
            {
                await _userService.AddUserAsync(user);
                return Ok(new ApiResponce(
                        HttpStatusCode.OK,
                        null
                    ));
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiException(
                        HttpStatusCode.BadRequest,
                        ex.Message
                    ));
            }
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
