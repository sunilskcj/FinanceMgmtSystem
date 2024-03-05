using System;
using System.Collections.Generic;

namespace finance_mgmt_Repository.Models;

public partial class Account
{
    public string? AccountName { get; set; }

    public string? AccountType { get; set; }

    public decimal? Balance { get; set; }

    public int AccountsId { get; set; }

    public virtual ICollection<Expenditure> Expenditures { get; set; } = new List<Expenditure>();
}
