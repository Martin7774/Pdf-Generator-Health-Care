using Generator_PDF_Healthy_Care.Models;
using Generator_PDF_Healthy_Care.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Generator_PDF_Healthy_Care.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _patientService;

        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        [HttpPost]
        [Route("CreatePatient")]
        public ActionResult CreatePatient([FromBody] Patient dto)
        {
            var id = _patientService.Create(dto);

            return Created($"/api/patients/{id}", null);
        }

        [HttpGet]
        [Route("GetPatients")]
        public ActionResult<IEnumerable<Patient>> GetAll()
        {
            var patientsDtos = _patientService.GetAll();

            return Ok(patientsDtos);
        }

        //[HttpGet("{id}")]
        //public ActionResult<Patient> Get([FromRoute] int id)
        //{
        //    var patient = _patientService.GetById(id);
        //    return Ok(patient);
        //}

        //[HttpPut("{id}")]
        //public ActionResult Update([FromRoute] int id, [FromBody] Patient dto)
        //{
        //    _patientService.Update(id, dto);
        //    return Ok();
        //}

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            _patientService.Delete(id);

            return NoContent();
        }
    }
}
