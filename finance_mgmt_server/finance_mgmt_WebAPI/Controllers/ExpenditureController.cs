using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace finance_mgmt_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenditureController : ControllerBase
    {
        private readonly IExpenditure acc;
        public ExpenditureController(IExpenditure acc)
        {
            this.acc = acc;
        }
        [HttpGet]
        public IActionResult GetAllExpenditure()
        {
            try
            {
                List<Expenditure> allExpenditures = acc.GetAllExpenses();
                if (allExpenditures.Count > 0) return Ok(allExpenditures);
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("fetchById/{id}")]
        public IActionResult GetExpenditurebyID(int id)
        {
            try
            {
                Expenditure allExpenditures = acc.FetchbyId(id);
                if (allExpenditures is not null) return Ok(allExpenditures);
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult AddExpenditure(Expenditure newacc)
        {
            try
            {
                if (acc.AddExpenses(newacc) > 0) return Ok(new { UserID = newacc.ExpId });
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPut]
        public IActionResult UpdateExpenditure(Expenditure newacc)
        {
            try
            {
                if (acc.UpdateExpenses(newacc) > 0) return Ok(new { UserID = newacc.ExpId });
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteExpenditure(int id)
        {
            try
            {
                if (acc.DeleteExpensesbyId(id) > 0) return Ok(new { UserID = id});
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
