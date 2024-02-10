using System;
using System.Collections.Generic;

namespace finance_mgmt_Repository.Models;

public partial class Expenditure
{
    public string? Expenses { get; set; }

    public decimal? Amount { get; set; }

    public int? ExpenseType { get; set; }

    public int? FreqType { get; set; }

    public DateTime? ExpenseDate { get; set; }

    public string? Notes { get; set; }

    public int? AccountsId { get; set; }

    public int ExpId { get; set; }

    public string? Category { get; set; }

    public virtual Account? Accounts { get; set; }
}
