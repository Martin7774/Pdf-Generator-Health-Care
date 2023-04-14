using Generator_PDF_Healthy_Care.Models;
using Generator_PDF_Healthy_Care.Service;
using Microsoft.AspNetCore.Mvc;

namespace Generator_PDF_Healthy_Care.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;

        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        [HttpPost]
        [Route("CreateDoctor")]
        public ActionResult CreateDoctor([FromBody] Doctor dto)
        {
            var id = _doctorService.Create(dto);

            return Created($"/api/doctors/{id}", null);
        }

        [HttpGet]
        [Route("GetDoctors")]
        public ActionResult<IEnumerable<Doctor>> GetAll()
        {
            var doctorsDtos = _doctorService.GetAll();

            return Ok(doctorsDtos);
        }

        //[HttpGet("{id}")]
        //public ActionResult<Doctor> Get([FromRoute] int id)
        //{
        //    var doctor = _doctorService.GetById(id);
        //    return Ok(doctor);
        //}

        //[HttpPut("{id}")]
        //public ActionResult Update([FromRoute] int id, [FromBody] Doctor dto)
        //{
        //    _doctorService.Update(id, dto);
        //    return Ok();
        //}

        [HttpDelete("DeleteDoctor/{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            _doctorService.Delete(id);

            return NoContent();
        }
    }
}
