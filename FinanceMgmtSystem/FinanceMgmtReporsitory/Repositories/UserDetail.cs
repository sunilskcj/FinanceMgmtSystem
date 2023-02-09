using System;
using System.Collections.Generic;

namespace FinanceMgmtReporsitory.Repositories;

public partial class UserDetail
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

    public virtual ICollection<OrderDetail> OrderDetails { get; } = new List<OrderDetail>();
}
