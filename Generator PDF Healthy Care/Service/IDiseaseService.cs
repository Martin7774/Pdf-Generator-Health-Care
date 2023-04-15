using Generator_PDF_Healthy_Care.Models;

namespace Generator_PDF_Healthy_Care.Service
{
    public interface IDiseaseService
    {
        int Create(Disease disease);
        void Delete(int id);
        IEnumerable<Disease> GetAll();
    }
}