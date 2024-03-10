using System;
using System.Collections.Generic;

namespace finance_mgmt_Repository.Models;

public partial class ExpenseTable
{
    public string? Category { get; set; }

    public decimal? NetAmount { get; set; }
}
