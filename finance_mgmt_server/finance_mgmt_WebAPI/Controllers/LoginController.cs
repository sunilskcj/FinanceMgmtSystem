using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.DataAccessLayer.Implementation;
using finance_mgmt_Repository.Models;
using finance_mgmt_WebAPI.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace finance_mgmt_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IJwtTokenManager jwtTokenManager;
        private readonly ILogin login;
        public LoginController(ILogin login,IJwtTokenManager jwtTokenManager)
        {
            this.login = login;
            this.jwtTokenManager = jwtTokenManager;
        }
        
        [HttpPost]
        public IActionResult LoginUser([FromBody]UserInfo cred)
        {
            try
            {
               
                bool isAuthenticated = login.AuthenticateUser(cred);
                if (!isAuthenticated)
                    return this.NotFound("User is not authenticated");

                var tokenValue = this.jwtTokenManager.GenerateJwt(cred);
                return this.Ok(new { token = tokenValue });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
