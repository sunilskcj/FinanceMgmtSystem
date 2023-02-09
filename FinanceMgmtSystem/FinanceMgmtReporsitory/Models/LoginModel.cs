using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.Models
{
    public class LoginModel
    {
        public string UserName { get; set; } = null!;
        public string? Password { get; set; }
    }
}
