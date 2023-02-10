using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.Models
{
    public class UserDetailsModel
    {
        public string? FullName { get; set; }

        public string UserName { get; set; } = null!;

        public DateTime? Dob { get; set; }

        public decimal? PhoneNumber { get; set; }

        public string? EmailId { get; set; }

        public string? Adress { get; set; }

        public string? Password { get; set; }

        public string? CardType { get; set; }

        public string? Bank { get; set; }

        public decimal? AccountNumber { get; set; }

        public string? Ifsccode { get; set; }

        public int OrderId { get; set; }

        public string? Status { get; set; }
        public virtual ICollection<OrderDetailsModel> OrderDetails { get; } = new List<OrderDetailsModel>();
    }
}
