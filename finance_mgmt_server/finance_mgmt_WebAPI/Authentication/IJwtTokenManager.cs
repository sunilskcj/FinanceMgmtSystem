using finance_mgmt_Repository.Models;

namespace finance_mgmt_WebAPI.Authentication
{
    public interface IJwtTokenManager
    {
        string GenerateJwt(UserInfo user);
    }
}
