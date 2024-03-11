
using finance_mgmt_Repository.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
namespace finance_mgmt_WebAPI.Authentication
{
   
        public class JwtTokenManager : IJwtTokenManager
        {
            private IConfiguration configuration;
            public JwtTokenManager(IConfiguration _configuration)
            {
                this.configuration = _configuration;
            }
            public string GenerateJwt(UserInfo user)
            {
                string secretKey = configuration["Jwt:Key"];
                byte[] secrectKeyByteArray = Encoding.UTF8.GetBytes(secretKey);
                SymmetricSecurityKey tokenKey = new SymmetricSecurityKey(secrectKeyByteArray);
                SigningCredentials signingCredentials = new SigningCredentials(tokenKey, SecurityAlgorithms.HmacSha256);

                Claim userNameBasedClaim = new Claim(ClaimTypes.Name, user.UserId.ToString());
                // Claim roleBasedClaim = new Claim(ClaimTypes.Role, user.Role);   
                Claim[] userClaims = new Claim[] { userNameBasedClaim };
                ClaimsIdentity identiy = new ClaimsIdentity(userClaims);
                SecurityTokenDescriptor tokeDescriptor = new SecurityTokenDescriptor
                {
                    Issuer = this.configuration["Jwt:Issuer"],
                    Audience = this.configuration["Jwt:Audience"],
                    IssuedAt = DateTime.Now,
                    Subject = identiy,
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = signingCredentials
                };
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                SecurityToken securityToken = tokenHandler.CreateToken(tokeDescriptor);
                string token = tokenHandler.WriteToken(securityToken);
                return token;
            }
        }
   
}
