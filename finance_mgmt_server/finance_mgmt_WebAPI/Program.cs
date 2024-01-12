using finance_mgmt_Repository.DataAccessLayer.Abstraction;
using finance_mgmt_Repository.DataAccessLayer.Implementation;
using finance_mgmt_Repository.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
Action<DbContextOptionsBuilder> action = (DbContextOptionsBuilder builder) =>
{
    builder.UseSqlServer("Server=SKCJPC;Initial Catalog=FinanceMgmtSystm;Integrated Security=True;TrustServerCertificate=True;");
};
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FinanceMgmtSystmContext>(action, ServiceLifetime.Scoped);
builder.Services.AddTransient<ILogin, LoginDao > ();
builder.Services.AddTransient<IAccounts, AccountsDao>();
builder.Services.AddTransient<IExpenditure, ExpenditureDao>();

builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthorization();
app.UseCors(
              policyBuilder =>
              policyBuilder
              .AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader()
              );
app.MapControllers();

app.Run();
