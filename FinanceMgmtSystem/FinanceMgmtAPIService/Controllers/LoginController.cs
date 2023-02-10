using FinanceMgmtReporsitory.Interface;
using FinanceMgmtReporsitory.Models;
using FinanceMgmtReporsitory.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinanceMgmtAPIService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private ILoginDao LoginDao;
        public LoginController(ILoginDao LoginDao)
        {
            this.LoginDao = LoginDao;
        }

        [HttpPost]
        [Route("admin")]
        public IActionResult LoginUser(LoginModel loginMode)
        {
            bool isAuthenticate = LoginDao.IsAuthenticatedUser(loginMode);
            if (!isAuthenticate) return this.NotFound("Invalid Username or password");
            return this.Ok(new
            {
                StatusCode = 201,

                Data = loginMode
            }) ;
        }

       
    }
}
