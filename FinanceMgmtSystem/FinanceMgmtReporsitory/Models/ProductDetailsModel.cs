
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.Models
{
    public class ProductDetailsModel
    {
        public string? ProductName { get; set; }

        public int ProductId { get; set; }

        public string? Description { get; set; }

        public decimal? Price { get; set; }

        public string? Image { get; set; }

        public string? PurchaseType { get; set; }

        public int? EmiId { get; set; }

        public virtual EmiDetailsModel? Emi { get; set; }

        public virtual OrderDetailsModel? OrderDetail { get; set; }
    }
}
