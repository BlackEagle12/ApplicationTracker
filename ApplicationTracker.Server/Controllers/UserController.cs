﻿using ApplicationTracker.Dto;
using ApplicationTracker.Service;
using Microsoft.AspNetCore.Mvc;
using System.Net;

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

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpGet("apppasswordcheck/{userId}")]
        public async Task<IActionResult> IsAppPasswordAvailable(int userId)
        {
            var isAvailable = await _userService.IsAppPasswordAvailableAsync(userId);
            return Ok(new ApiResponce(
                            HttpStatusCode.OK,
                            isAvailable
                        ));
        }

        [TypeFilter(typeof(AuthorizationFilter))]
        [HttpPost("setEmailAppPassword/{userId}")]
        public async Task<IActionResult> SetEmailAppPassword(int userId, [FromBody] string appPassword)
        {
            await _userService.SetEmailAppPasswordAsync(userId, appPassword);
            return Ok(new ApiResponce(
                            HttpStatusCode.OK
                        ));
        }
    }
}
