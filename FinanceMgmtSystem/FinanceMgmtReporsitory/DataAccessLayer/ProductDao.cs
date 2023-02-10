using FinanceMgmtReporsitory.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinanceMgmtReporsitory.DataAccessLayer
{
    public class ProductDao
    {
        private FinanceMgmtSystemAContext db;

        public ProductDao(FinanceMgmtSystemAContext financeMgmtSystemAContext)
        {
            this.db = financeMgmtSystemAContext;
        }

        public List<ProductDetail> GetAllProduct()
        {
            return db.ProductDetails.ToList();
        }

        public ProductDetail GetAllProductbyId(int id)
        {
            return db.ProductDetails.Where(u => u.ProductId == id).First();
        }
    }
}
