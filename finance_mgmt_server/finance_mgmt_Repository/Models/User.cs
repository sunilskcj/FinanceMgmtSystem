using System;
using System.Collections.Generic;

namespace finance_mgmt_Repository.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? UserPassword { get; set; }

    public int? Id { get; set; }

    public int? AccountsId { get; set; }

    public virtual Account? Accounts { get; set; }
}
