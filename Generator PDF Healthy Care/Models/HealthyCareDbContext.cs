using Microsoft.EntityFrameworkCore;

namespace Generator_PDF_Healthy_Care.Models
{
    public class HealthyCareDbContext : DbContext
    {
        public HealthyCareDbContext(DbContextOptions<HealthyCareDbContext> options) : base(options) { }


        private string _connectionString =
            "Server=(localdb)\\mssqllocaldb;Database=HealthyCare;Trusted_Connection=True;";
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Disease> Diseases { get; set; }

        public DbSet<Doctor> Doctors { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>()
           .HasKey(p => p.Id);

            modelBuilder.Entity<Patient>()
                .Property(p => p.FirstName)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode()
                .HasAnnotation("MaxLength", 50)
                .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Patient>()
                .Property(p => p.LastName)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode()
                .HasAnnotation("MaxLength", 50)
                .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Patient>()
                .Property(p => p.DateOfBirth)
                .IsRequired()
                .HasColumnType("date");

            modelBuilder.Entity<Patient>()
                .Property(p => p.Pesel)
                .IsRequired()
                .HasMaxLength(11)
                .IsUnicode()
                .HasAnnotation("MaxLength", 11)
                .HasAnnotation("MinLength", 11);

            modelBuilder.Entity<Patient>()
                .Property(p => p.Street)
                .IsRequired()
                .HasMaxLength(100)
                .IsUnicode()
                .HasAnnotation("MaxLength", 100)
                .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Patient>()
                .Property(p => p.Phone)
                .IsRequired()
                .IsUnicode(false)
                .HasMaxLength(20)
                .HasAnnotation("MaxLength", 20)
                .HasAnnotation("RegularExpression", @"^[0-9]+$");

            modelBuilder.Entity<Patient>()
                .Property(p => p.Email)
                .IsRequired()
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasAnnotation("MaxLength", 255);

            ///////////////////////////////////////
            ///
            modelBuilder.Entity<Disease>()
                .Property(d => d.Name)
                .IsRequired()
                .HasMaxLength(100)
                .IsUnicode()
                .HasAnnotation("MaxLength", 100)
                .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Disease>()
                .Property(d => d.Description)
                .IsRequired()
                .HasMaxLength(500)
                .IsUnicode()
                .HasAnnotation("MaxLength", 500)
                .HasAnnotation("MinLength", 10);

            modelBuilder.Entity<Disease>()
                .Property(d => d.Symptoms)
                .IsRequired();

            modelBuilder.Entity<Disease>()
                .Property(d => d.Causes)
                .IsRequired();

            modelBuilder.Entity<Disease>()
                .Property(d => d.Treatments)
                .IsRequired();

            modelBuilder.Entity<Disease>()
                .Property(d => d.Prevention)
                .IsRequired();

            modelBuilder.Entity<Disease>()
                .Property(d => d.PatientId)
                .IsRequired();

            modelBuilder.Entity<Disease>()
                .HasOne(d => d.Patient)
                .WithMany(p => p.Diseases)
                .HasForeignKey(d => d.PatientId);

            /////////////////////////////////////
            ///
            modelBuilder.Entity<Doctor>()
            .Property(d => d.FirstName)
            .IsRequired()
            .HasMaxLength(50)
            .IsUnicode()
            .HasAnnotation("MaxLength", 50)
            .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Doctor>()
                        .Property(d => d.LastName)
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode()
                        .HasAnnotation("MaxLength", 50)
                        .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Doctor>()
                        .Property(d => d.Phone)
                        .IsRequired()
                        .IsUnicode(false)
                        .HasMaxLength(20)
                        .HasAnnotation("MaxLength", 20);

            modelBuilder.Entity<Doctor>()
                        .Property(d => d.Email)
                        .IsRequired()
                        .IsUnicode(false)
                        .HasMaxLength(50)
                        .HasAnnotation("MaxLength", 50);

            modelBuilder.Entity<Doctor>()
                        .Property(d => d.Specialization)
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode()
                        .HasAnnotation("MaxLength", 50)
                        .HasAnnotation("MinLength", 2);

            modelBuilder.Entity<Doctor>()
                        .Property(d => d.LicenseNumber)
                        .IsRequired()
                        .IsUnicode(false)
                        .HasMaxLength(20)
                        .HasAnnotation("MaxLength", 20);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
