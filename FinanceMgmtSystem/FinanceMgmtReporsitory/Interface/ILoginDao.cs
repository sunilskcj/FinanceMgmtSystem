using FinanceMgmtReporsitory.Models;
using FinanceMgmtReporsitory.Repositories;

namespace FinanceMgmtReporsitory.Interface
{
    public interface ILoginDao
    {
        bool IsAuthenticatedUser(LoginModel loginModel);

       
    }
}