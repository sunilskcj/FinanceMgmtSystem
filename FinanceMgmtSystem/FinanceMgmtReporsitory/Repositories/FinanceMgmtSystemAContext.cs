using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FinanceMgmtReporsitory.Repositories;

public partial class FinanceMgmtSystemAContext : DbContext
{
    public FinanceMgmtSystemAContext()
    {
    }

    public FinanceMgmtSystemAContext(DbContextOptions<FinanceMgmtSystemAContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Emidetail> Emidetails { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<ProductDetail> ProductDetails { get; set; }

    public virtual DbSet<UserDetail> UserDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=SKCJPC;Database=FinanceMgmtSystemA;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Emidetail>(entity =>
        {
            entity.HasKey(e => e.EmiId).HasName("PK__EMIDetai__AFEDB041F15B3A18");

            entity.ToTable("EMIDetails");

            entity.Property(e => e.EmiId)
                .ValueGeneratedNever()
                .HasColumnName("EmiID");
            entity.Property(e => e.Interest).HasColumnName("interest");

            entity.HasOne(d => d.Pay).WithMany(p => p.Emidetails)
                .HasForeignKey(d => d.PayId)
                .HasConstraintName("FK__EMIDetail__PayId__48CFD27E");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__OrderDet__C3905BAFB3838831");

            entity.HasIndex(e => e.ProductId, "UQ__OrderDet__B40CC6CC2C7F2785").IsUnique();

            entity.Property(e => e.OrderId)
                .ValueGeneratedNever()
                .HasColumnName("OrderID");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.Product).WithOne(p => p.OrderDetail)
                .HasForeignKey<OrderDetail>(d => d.ProductId)
                .HasConstraintName("FK__OrderDeta__Produ__440B1D61");

            entity.HasOne(d => d.UserNameNavigation).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.UserName)
                .HasConstraintName("FK__OrderDeta__UserN__3A81B327");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PayId).HasName("PK__Payment__EE8FCECFD35E54D7");

            entity.ToTable("Payment");

            entity.Property(e => e.PayId).ValueGeneratedNever();
            entity.Property(e => e.DownPayment).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.NetPay).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.PaidPayment).HasColumnType("decimal(10, 2)");
        });

        modelBuilder.Entity<ProductDetail>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__ProductD__B40CC6CD7A8C4E69");

            entity.HasIndex(e => e.EmiId, "UQ__ProductD__AFEDB1A0502A4E84").IsUnique();

            entity.HasIndex(e => e.ProductId, "UQ__ProductD__B40CC6CC354BF092").IsUnique();

            entity.Property(e => e.ProductId).ValueGeneratedNever();
            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.Image)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.Price).HasColumnType("decimal(9, 2)");
            entity.Property(e => e.ProductName)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.PurchaseType)
                .HasMaxLength(30)
                .IsUnicode(false);

            entity.HasOne(d => d.Emi).WithOne(p => p.ProductDetail)
                .HasForeignKey<ProductDetail>(d => d.EmiId)
                .HasConstraintName("FK__ProductDe__EmiId__4AB81AF0");
        });

        modelBuilder.Entity<UserDetail>(entity =>
        {
            entity.HasKey(e => e.UserName).HasName("PK__UserDeta__C9F284578779527B");

            entity.HasIndex(e => e.AccountNumber, "UQ__UserDeta__BE2ACD6F473D8C0B").IsUnique();

            entity.HasIndex(e => e.UserName, "UQ__UserDeta__C9F284564E48CEB8").IsUnique();

            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.AccountNumber).HasColumnType("numeric(15, 0)");
            entity.Property(e => e.Adress)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("adress");
            entity.Property(e => e.Bank)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CardType)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Dob)
                .HasColumnType("datetime")
                .HasColumnName("DOB");
            entity.Property(e => e.EmailId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EmailID");
            entity.Property(e => e.FullName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ifsccode)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("IFSCCode");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.Password)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.PhoneNumber).HasColumnType("numeric(13, 0)");
            entity.Property(e => e.Status)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
