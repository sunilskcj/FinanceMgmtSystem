using finance_mgmt_Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.DataAccessLayer.Abstraction
{
    public interface IAccounts
    {
        public List<Account> GetAllAccount();
        public int AddAccount(Account acc);
        public int UpdateAccount(Account acc);
        public int UpdateAmount(Account acc);
        public int DeleteAccount(Account acc);
    }
}
