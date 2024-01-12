using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
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

        public int DeleteExpenses(Expenditure exp)
        {
            _db.Expenditures.Remove(exp);
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
            return _db.Expenditures.ToList<Expenditure>();
        }

        public int UpdateExpenses(Expenditure exp)
        {
            _db.Expenditures.Update(exp);
            return _db.SaveChanges();
        }
    }
}
