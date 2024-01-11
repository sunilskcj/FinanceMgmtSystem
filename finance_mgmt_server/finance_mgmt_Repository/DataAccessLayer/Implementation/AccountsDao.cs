using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.DataAccessLayer.Implementation
{
    public class AccountsDao : IAccounts
    {
        private readonly FinanceMgmtSystmContext _db;
        public AccountsDao(FinanceMgmtSystmContext _db)
        {
            this._db = _db;
        }
        public List<Account> GetAllAccount()
        {
            return _db.Accounts.ToList<Account>();
        }
        public int AddAccount(Account acc)
        {
            _db.Accounts.Add(acc);
            return _db.SaveChanges();
        }

        public int DeleteAccount(Account acc)
        {
            _db.Accounts.Remove(acc);
            return _db.SaveChanges();
        }

        public int UpdateAccount(Account acc)
        {
            _db.Accounts.Update(acc);
            return _db.SaveChanges();
        }

        public int UpdateAmount(Account acc)
        {
            throw new NotImplementedException();
        }
    }
}
