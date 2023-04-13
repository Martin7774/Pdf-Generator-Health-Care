using Generator_PDF_Healthy_Care.Models;

namespace Generator_PDF_Healthy_Care.Service
{
    public interface IDoctorService
    {
        int Create(Doctor doctor);
        void Delete(int id);
        IEnumerable<Doctor> GetAll();
    }
}
