using Generator_PDF_Healthy_Care.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Generator_PDF_Healthy_Care.Service
{
    public class DoctorService : IDoctorService
    {
        public readonly HealthyCareDbContext _dbContext;

        public DoctorService(HealthyCareDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Create(Doctor doctor)
        {
            _dbContext.Doctors.Add(doctor);
            _dbContext.SaveChanges();

            return doctor.Id;
        }
        public IEnumerable<Doctor> GetAll()
        {
            var doctors = _dbContext
              .Doctors
              .ToList();

            return doctors;
        }
        public void Delete(int id)
        {
            var doctor = _dbContext
                .Doctors
                .FirstOrDefault(x => x.Id == id);


            _dbContext.Doctors.Remove(doctor);
            _dbContext.SaveChanges();


        }
    }
}
