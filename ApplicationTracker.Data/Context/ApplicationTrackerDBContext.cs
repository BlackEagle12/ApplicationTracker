﻿using System;
using System.Collections.Generic;
using ApplicationTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace ApplicationTracker.Data.Context;

public partial class ApplicationTrackerDBContext : DbContext
{
    public ApplicationTrackerDBContext()
    {
    }

    public ApplicationTrackerDBContext(DbContextOptions<ApplicationTrackerDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<RefEnumType> RefEnumTypes { get; set; }

    public virtual DbSet<RefEnumValue> RefEnumValues { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserSetting> UserSettings { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RefEnumType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RefEnumT__3214EC07E3CE588B");

            entity.ToTable("RefEnumType");

            entity.HasIndex(e => e.EnumType, "UQ__RefEnumT__BEBED412E22A97A3").IsUnique();

            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.EnumType)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<RefEnumValue>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__RefEnumV__3214EC0777DFB7BE");

            entity.ToTable("RefEnumValue");

            entity.HasIndex(e => e.EnumValue, "UQ__RefEnumV__0F4A3618D48A7CA1").IsUnique();

            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.EnumTypeId)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EnumValue)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__USERS__3214EC0736A2775F");

            entity.HasIndex(e => e.Email, "UQ__USERS__A9D10534A0C92B56").IsUnique();

            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.TempToken)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<UserSetting>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserSett__3214EC07E06F723A");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
