using System;
using System.Collections.Generic;

namespace FinanceMgmtReporsitory.Repositories;

public partial class Emidetail
{
    public int Duration { get; set; }

    public float? Interest { get; set; }

    public int EmiId { get; set; }

    public int? PayId { get; set; }

    public virtual Payment? Pay { get; set; }

    public virtual ProductDetail? ProductDetail { get; set; }
}
