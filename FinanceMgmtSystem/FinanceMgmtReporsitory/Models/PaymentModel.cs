
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.Models
{
    public class PaymentModel
    {
        public int PayId { get; set; }

        public decimal? DownPayment { get; set; }

        public decimal? PaidPayment { get; set; }

        public decimal? NetPay { get; set; }

        public virtual ICollection<EmiDetailsModel> Emidetails { get; } = new List<EmiDetailsModel>();
    }
}
