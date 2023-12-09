using finance_mgmt_Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.DataAccessLayer.Abstraction
{
    public interface ILogin
    {
        public int isUserExist(User i);
        public int updatePassword();
    }
}
