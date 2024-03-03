using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.DataAccessLayer.Implementation
{
    public class ExpenditureDao : IExpenditure
    {
        private readonly FinanceMgmtSystmContext _db;
        public ExpenditureDao(FinanceMgmtSystmContext _db)
        {
            this._db = _db;
        }
                
        public int AddExpenses(Expenditure exp)

        {
            _db.Expenditures.Add(exp);
            return _db.SaveChanges();
        }

        public int DeleteExpensesbyId(int id)
        {
            var found=_db.Expenditures.Where(p => p.ExpId == id).FirstOrDefault<Expenditure>();
            if (found != null) _db.Expenditures.Remove(found);
            return _db.SaveChanges();
        }

        public Expenditure FetchbyId(int id)
        {
            
                return _db.Expenditures.Where(p => p.ExpId == id).First<Expenditure>();
                //return _db
                //    .Expenditures
                //    .Where(e => e.Id == id)
                //    .Select(e => new Expenditure { EmiId = e.Id, EmiAmount = e.EmiAmount.Value, EmitypeId = e.EmitypeId, Orderid = e.Orderid.Value, Paymentid = e.Paymentid.Value, RegId = e.RegId.Value })
                //    .First();
           
        }

        public List<Expenditure> GetAllExpenses()
        {
            return _db.Expenditures.Where(e=>e.ExpenseType==1).ToList<Expenditure>();
        }
        public List<Expenditure> GetAllIncome()
        {
            return _db.Expenditures.Where(e => e.ExpenseType == 2).ToList<Expenditure>();
        }
        public List<IncomeTable> GetAllIncomeTablebyCategory(int id)
        {
            return _db.IncomeTables.FromSqlRaw($"GetIncomeDatabyUserId  {id}").ToList<IncomeTable>();
        }
        public List<ExpenseTable> GetAllExpenseTablebyCategory(int id)
        {
            return _db.ExpenseTables.FromSqlRaw($"GetExpenseDatabyUserId  {id}").ToList<ExpenseTable>();
        }
        public int UpdateExpenses(Expenditure exp)
        {
            _db.Expenditures.Update(exp);
            return _db.SaveChanges();
        }
    }
}
