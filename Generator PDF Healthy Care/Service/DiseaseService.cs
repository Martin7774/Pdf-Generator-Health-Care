using Generator_PDF_Healthy_Care.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Generator_PDF_Healthy_Care.Service
{
    public class DiseaseService : IDiseaseService
    {
        public readonly HealthyCareDbContext _dbContext;

        public DiseaseService(HealthyCareDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Create(Disease disease)
        {
            _dbContext.Diseases.Add(disease);
            _dbContext.SaveChanges();

            return disease.Id;
        }
        public IEnumerable<Disease> GetAll()
        {
            var diseases = _dbContext
              .Diseases
              .Include(r => r.Patient)
              .ToList();

            return diseases;
        }
        public void Delete(int id)
        {
            var disease = _dbContext
                .Diseases
                .FirstOrDefault(x => x.Id == id);


            _dbContext.Diseases.Remove(disease);
            _dbContext.SaveChanges();


        }
    }
}
