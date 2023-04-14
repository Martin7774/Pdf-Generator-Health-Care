using Generator_PDF_Healthy_Care.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Generator_PDF_Healthy_Care.Service
{
    public class SpecializationService : ISpecializationService
    {
        public readonly HealthyCareDbContext _dbContext;

        public SpecializationService(HealthyCareDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Create(Specialization specialization)
        {
            _dbContext.Specializations.Add(specialization);
            _dbContext.SaveChanges();

            return specialization.Id;
        }
        public IEnumerable<Specialization> GetAll()
        {
            var specializations = _dbContext
              .Specializations
              .ToList();

            return specializations;
        }
        public void Delete(int id)
        {
            var specialization = _dbContext
                .Specializations
                .FirstOrDefault(x => x.Id == id);


            _dbContext.Specializations.Remove(specialization);
            _dbContext.SaveChanges();


        }
    }
}
