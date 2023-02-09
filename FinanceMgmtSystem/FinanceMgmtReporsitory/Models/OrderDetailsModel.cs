using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.Models
{
    public class OrderDetailsModel
    {
        public int OrderId { get; set; }

        public int OrderNumber { get; set; }

        public string? UserName { get; set; }

        public int? ProductId { get; set; }

        public virtual ProductDetailsModel? Product { get; set; }

        public virtual UserDetailsModel? UserNameNavigation { get; set; }
    }
}
