using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace finance_mgmt_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccounts acc;
        public AccountsController(IAccounts acc)
        {
            this.acc = acc;
        }
        [HttpGet]
        public IActionResult GetAllAccount()
        {
            try
            {
                List<Account> allAccounts = acc.GetAllAccount();
                if (allAccounts.Count > 0) return Ok(allAccounts );
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult AddAccount(Account newacc)
        {
            try
            {
                if (acc.AddAccount(newacc) > 0) return Ok(new { UserID = newacc.AccountsId});
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPut]
        public IActionResult UpdateAccount(Account newacc)
        {
            try
            {
                if (acc.UpdateAccount(newacc) > 0) return Ok(new { UserID = newacc.AccountsId });
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpDelete]
        public IActionResult DeleteAccount(Account newacc)
        {
            try
            {
                if (acc.DeleteAccount(newacc) > 0) return Ok(new { UserID = newacc.AccountsId });
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
