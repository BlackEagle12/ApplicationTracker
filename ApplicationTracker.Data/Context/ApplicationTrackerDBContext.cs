using Microsoft.EntityFrameworkCore;

namespace ApplicationTracker.Data
{
    public partial class ApplicationTrackerDBContext : DbContext
    {
        public ApplicationTrackerDBContext()
        {
        }

        public ApplicationTrackerDBContext(DbContextOptions<ApplicationTrackerDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("PK__USERS__3214EC078A13EF37");

                entity.ToTable("USERS");

                entity.HasIndex(e => e.Email, "UQ__USERS__A9D105340D76C067").IsUnique();

                entity.Property(e => e.AddedOn).HasColumnName("Added On");
                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);
                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("First Name");
                entity.Property(e => e.IsVerified).HasColumnName("Is Verified");
                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Last Name");
                entity.Property(e => e.LastUpdatedOn).HasColumnName("Last Updated On");
                entity.Property(e => e.Password)
                    .HasMaxLength(25)
                    .IsUnicode(false);
                entity.Property(e => e.TempToken)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Temp Token");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
