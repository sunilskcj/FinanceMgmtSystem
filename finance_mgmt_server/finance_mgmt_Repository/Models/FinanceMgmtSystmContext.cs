using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace finance_mgmt_Repository.Models;

public partial class FinanceMgmtSystmContext : DbContext
{
    public FinanceMgmtSystmContext()
    {
    }

    public FinanceMgmtSystmContext(DbContextOptions<FinanceMgmtSystmContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Expenditure> Expenditures { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=SKCJPC;Initial Catalog=FinanceMgmtSystm;Integrated Security=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.AccountsId).HasName("PK__Accounts__538D3ACCBEA1ADE7");

            entity.Property(e => e.AccountsId)
                .ValueGeneratedNever()
                .HasColumnName("AccountsID");
            entity.Property(e => e.AccountName)
                .HasMaxLength(225)
                .IsUnicode(false);
            entity.Property(e => e.AccountType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Balance).HasColumnType("decimal(18, 2)");
        });

        modelBuilder.Entity<Expenditure>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Expendit__3214EC27C2C0B428");

            entity.ToTable("Expenditure");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.AccountsId).HasColumnName("AccountsID");
            entity.Property(e => e.Amount).HasColumnType("decimal(18, 2)");
            entity.Property(e => e.ExpenseDate).HasColumnType("date");
            entity.Property(e => e.Expenses)
                .HasMaxLength(225)
                .IsUnicode(false);
            entity.Property(e => e.Notes)
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.HasOne(d => d.Accounts).WithMany(p => p.Expenditures)
                .HasForeignKey(d => d.AccountsId)
                .HasConstraintName("FK__Expenditu__Accou__46E78A0C");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C2017C8EB");

            entity.Property(e => e.UserId).ValueGeneratedNever();
            entity.Property(e => e.AccountsId).HasColumnName("AccountsID");
            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(13)
                .IsUnicode(false);

            entity.HasOne(d => d.Accounts).WithMany(p => p.Users)
                .HasForeignKey(d => d.AccountsId)
                .HasConstraintName("FK__Users__AccountsI__47DBAE45");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
