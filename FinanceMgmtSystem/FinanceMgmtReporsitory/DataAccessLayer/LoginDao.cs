using FinanceMgmtReporsitory.Interface;
using FinanceMgmtReporsitory.Models;
using FinanceMgmtReporsitory.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.DataAccessLayer
{
    public class LoginDao : ILoginDao
    {
        private FinanceMgmtSystemAContext db;
        public LoginDao(FinanceMgmtSystemAContext FinanceMgmtSystemAContext)
        {
            db = FinanceMgmtSystemAContext;
        }

        public bool IsAuthenticatedUser(LoginModel loginModel)
        {
            try
            {

                bool matchingAccountid = db.UserDetails.Any(u => u.UserName == loginModel.UserName && u.Password == loginModel.Password); // code to check the user exist

                if (matchingAccountid) return true;
                else return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public UserDetail GetbyUserId(string userDetails)
        {
            return db.UserDetails.Where(u => u.UserName == userDetails).First();
        }


    }
}
