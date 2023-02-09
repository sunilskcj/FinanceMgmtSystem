using System;
using System.Collections.Generic;

namespace FinanceMgmtReporsitory.Repositories;

public partial class Payment
{
    public int PayId { get; set; }

    public decimal? DownPayment { get; set; }

    public decimal? PaidPayment { get; set; }

    public decimal? NetPay { get; set; }

    public virtual ICollection<Emidetail> Emidetails { get; } = new List<Emidetail>();
}
