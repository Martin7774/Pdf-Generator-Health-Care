using Generator_PDF_Healthy_Care.Models;

namespace Generator_PDF_Healthy_Care.Service
{
    public interface IPatientService
    {
        int Create(Patient patient);
        void Delete(int id);
        IEnumerable<Patient> GetAll();
    }
}