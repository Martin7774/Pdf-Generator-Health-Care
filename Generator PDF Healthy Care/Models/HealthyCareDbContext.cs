using Microsoft.EntityFrameworkCore;

namespace Generator_PDF_Healthy_Care.Models
{
    public class HealthyCareDbContext : DbContext
    {
        public HealthyCareDbContext(DbContextOptions<HealthyCareDbContext> options) : base(options) { }

        public DbSet<Patient> Patients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>()
                .HasKey(u => u.Id);
        }
    }
}
