using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace finance_mgmt_Repository.Models
{
    public class Response
    {
        public int? status;
        public List<Expenditure>? data ;
        public string? message ;
    }
}
