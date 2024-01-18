using finance_mgmt_Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.DataAccessLayer.Abstraction
{
    public interface IExpenditure
    {
        public List<Expenditure> GetAllExpenses();
        public List<Expenditure> GetAllIncome();
        public Expenditure FetchbyId(int id);
        public int AddExpenses(Expenditure exp);
        public int UpdateExpenses(Expenditure exp);
        public int DeleteExpensesbyId(int id);
    }
}
