using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using Microsoft.AspNetCore.Authorization;
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
                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse( userIdClaim, out var userId))
                {
                    List<Expenditure> allExpenditures = acc.GetAllExpenses().Where(exp => exp.UserId == userId).ToList<Expenditure>();
                    if (allExpenditures.Count > 0) return Ok(allExpenditures);
                    return Ok();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
                //var headerValue = HttpContext.Request.Headers["Authorization"];
                //if (headerValue.Count > 0)
                //{
                //    var arrOfStrings = headerValue.ToString().Split(' ');
                //    var token = arrOfStrings[1];
                //    return Ok(userIdClaim);
                //}
                //else return BadRequest();
              
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("income")]
       
        public IActionResult GetAllIncome()
        {
            try
            {

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    List<Expenditure> allExpenditures = acc.GetAllIncome().Where(exp => exp.UserId == userId).ToList<Expenditure>(); ;

                    if (allExpenditures.Count > 0)
                    {

                        return Ok(allExpenditures);
                    }
                    return Ok();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
               
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("incomeTable")]
        public IActionResult GetAllIncomeTablebyCategory()
        {
            try
            {

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    List<IncomeTable> allExpenditures = acc.GetAllIncomeTablebyCategory(userId);

                    if (allExpenditures.Count > 0)
                    {

                        return Ok(allExpenditures);
                    }
                    return Ok();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
               
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("expenseTable")]
        public IActionResult GetAllExpenseTablebyCategory()
        {
            try
            {

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    List<ExpenseTable> allExpenditures = acc.GetAllExpenseTablebyCategory(userId);

                    if (allExpenditures.Count > 0)
                    {

                        return Ok(allExpenditures);
                    }
                    return Ok();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
               
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

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    Expenditure allExpenditures = acc.FetchbyId(id);
                    if (allExpenditures is not null) return Ok(allExpenditures);
                    return NotFound();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
               
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

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    newacc.UserId = userId;
                    if (acc.AddExpenses(newacc) > 0) return Ok(new { UserID = newacc.ExpId });
                    return NotFound();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }

               
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

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    newacc.UserId = userId;
                    if (acc.UpdateExpenses(newacc) > 0) return Ok(new { UserID = newacc.ExpId });
                    return NotFound();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
               
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

                var userIdClaim = User?.Identity?.Name;
                if (int.TryParse(userIdClaim, out var userId))
                {
                    if (acc.DeleteExpensesbyId(id) > 0) return Ok(new { UserID = id });
                    return NotFound();
                }
                else
                {
                    return BadRequest("Error occur while identifying claim");
                }
              
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
