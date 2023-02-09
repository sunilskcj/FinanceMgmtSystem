using System;
using System.Collections.Generic;

namespace FinanceMgmtReporsitory.Repositories;

public partial class OrderDetail
{
    public int OrderId { get; set; }

    public int OrderNumber { get; set; }

    public string? UserName { get; set; }

    public int? ProductId { get; set; }

    public virtual ProductDetail? Product { get; set; }

    public virtual UserDetail? UserNameNavigation { get; set; }
}
