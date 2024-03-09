using System;
using System.Collections.Generic;

namespace finance_mgmt_Repository.Models;

public partial class IncomeTable
{
    public string? Category { get; set; }

    public decimal? NetAmount { get; set; }
}
