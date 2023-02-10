using FinanceMgmtReporsitory.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.DataAccessLayer
{
    public class OrderDao
    {
        private FinanceMgmtSystemAContext db;

        public OrderDao(FinanceMgmtSystemAContext financeMgmtSystemAContext)
        {
            this.db = financeMgmtSystemAContext;
        }

        public List<OrderDetail> GetAllOrder()
        {
            return db.OrderDetails.ToList();
        }

        public OrderDetail GetAllOrderbyId(int id)
        {
            return db.OrderDetails.Where(u => u.OrderId == id).First();
        }
    }
}
