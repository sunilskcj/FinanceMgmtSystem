using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.Models
{
    
        public enum Roles
        {
            Admin,
            User
        }
    public class UserInfo
    {
        public int UserId { get; set; }
        public string Password { get; set; }
        public Roles Role { get; set; }
    }
}
