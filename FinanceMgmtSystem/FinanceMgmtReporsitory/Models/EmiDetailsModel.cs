using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.Models
{
    public class EmiDetailsModel
    {
        public int Duration { get; set; }

        public float? Interest { get; set; }

        public int EmiId { get; set; }

        public int? PayId { get; set; }

        public virtual PaymentModel? Pay { get; set; }

        public virtual ProductDetailsModel? ProductDetail { get; set; }
    }
}
