using FinanceMgmtReporsitory.DataAccessLayer;
using FinanceMgmtReporsitory.Interface;
using FinanceMgmtReporsitory.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<ILoginDao, LoginDao>();

builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddDbContext<FinanceMgmtSystemAContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

});

var app = builder.Build();

// Configure the HTTP request pipeline.



app.UseRouting();
app.UseAuthorization();

app.UseCors(
             policyBuilder =>
             policyBuilder
             .AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader()
             );
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();

