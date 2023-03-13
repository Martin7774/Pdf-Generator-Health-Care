using Generator_PDF_Healthy_Care.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Generator_PDF_Healthy_Care.Service
{
    public class PatientService : IPatientService
    {
        public readonly HealthyCareDbContext _dbContext;

        public PatientService(HealthyCareDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Create(Patient patient)
        {
            _dbContext.Patients.Add(patient);
            _dbContext.SaveChanges();

            return patient.Id;
        }
        public IEnumerable<Patient> GetAll()
        {
            var patients = _dbContext
              .Patients
              .Include(r => r.Doctor)
              .Include(r => r.Diseases)
              .ToList();

            return patients;
        }
        public void Delete(int id)
        {
            var patient = _dbContext
                .Patients
                .FirstOrDefault(x => x.Id == id);


            _dbContext.Patients.Remove(patient);
            _dbContext.SaveChanges();


        }
    }
}
