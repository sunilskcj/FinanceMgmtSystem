using System;
using System.Collections.Generic;

namespace FinanceMgmtReporsitory.Repositories;

public partial class ProductDetail
{
    public string? ProductName { get; set; }

    public int ProductId { get; set; }

    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public string? Image { get; set; }

    public string? PurchaseType { get; set; }

    public int? EmiId { get; set; }

    public virtual Emidetail? Emi { get; set; }

    public virtual OrderDetail? OrderDetail { get; set; }
}
