using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace finance_mgmt_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILogin login;
        public LoginController(ILogin login)
        {
            this.login = login;
        }
        
        [HttpPost]
        public IActionResult LoginUser(User cred)
        {
            try
            {
                if (login.isUserExist(cred) > 0) return Ok(new { UserID = cred.UserId });
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
