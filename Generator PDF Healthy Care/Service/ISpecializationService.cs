using Generator_PDF_Healthy_Care.Models;

namespace Generator_PDF_Healthy_Care.Service
{
    public interface ISpecializationService
    {
        int Create(Specialization specialization);
        void Delete(int id);
        IEnumerable<Specialization> GetAll();
    }
}