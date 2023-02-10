using FinanceMgmtReporsitory.Models;
using FinanceMgmtReporsitory.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.DataAccessLayer
{
    public class UserDao
    {
        private FinanceMgmtSystemAContext db;
        public UserDao(FinanceMgmtSystemAContext financeMgmtSystemAContext)
        {
            this.db = financeMgmtSystemAContext;
        }

        public UserDetail GetbyUserId(string userDetails)
        {
            return db.UserDetails.Where(u => u.UserName == userDetails).First();
        }

        public List<UserDetail> GetAllUser(string status)
        {
            return db.UserDetails.Where(u => u.Status == status).ToList();
        }

        public bool RegisterUser( UserDetailsModel u)
        {
            
            try
            {
                int res = 0;
                UserDetail userDetail = new UserDetail
                {
                    FullName = u.FullName,
                    Dob = u.Dob,
                    PhoneNumber = u.PhoneNumber,    
                    EmailId = u.EmailId,
                    Adress = u.Adress,
                    CardType = u.CardType,
                    Bank   = u.Bank,
                };
                db.UserDetails.Add(userDetail);
                res = db.SaveChanges();
                return res > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool ActivateUserById(string userName)
        {
            try
            {
                int res = 0;         
                UserDetail user = db.UserDetails.Where(u => u.UserName == userName).First();
                if (user != null)
                {
                    user.AccountNumber = AccNumberGenerator();
                    user.Password = PasswordGenerator(6);
                    user.Ifsccode = "SFGS5454";
                    db.UserDetails.Update(user);
                    res = db.SaveChanges();
                }
                return res > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        private static Random rnd = new Random(15);
        private long AccNumberGenerator()
        {
            bool loop = true;

            do
            {
                long number = rnd.Next();
                var matchingAccount = db.UserDetails.Where(p => p.AccountNumber == number);
                if (matchingAccount == null)
                {
                        loop = false;

                }

               
                return number;

            }
            while (loop);

        }

        private static Random random = new Random();

        private string PasswordGenerator(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }


}
