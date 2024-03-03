using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.DataAccessLayer.Implementation
{
    public class LoginDao : ILogin
    {
        private readonly FinanceMgmtSystmContext _db;
        public LoginDao(FinanceMgmtSystmContext _db)
        {
            this._db = _db; 
        }

        public int isUserExist(User _login)
        {
            return _db.Users.Where(l => l.UserId == _login.UserId && l.UserPassword == _login.UserPassword).Count();
        }
        public bool AuthenticateUser(UserInfo userInfo)
        {
            bool status = _db.Users.Any(user => user.UserId == userInfo.UserId && user.UserPassword == userInfo.Password);
            return status;
        }
        public int updatePassword()
        {
            throw new NotImplementedException();
        }
    }
}
