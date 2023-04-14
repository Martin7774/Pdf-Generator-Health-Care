using Generator_PDF_Healthy_Care.Models;
using Generator_PDF_Healthy_Care.Service;
using Microsoft.AspNetCore.Mvc;

namespace Generator_PDF_Healthy_Care.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecializationController : ControllerBase
    {
        private readonly ISpecializationService _specializationService;

        public SpecializationController(ISpecializationService specializationService)
        {
            _specializationService = specializationService;
        }

        [HttpPost]
        [Route("CreateSpecialization")]
        public ActionResult CreateSpecialization([FromBody] Specialization dto)
        {
            var id = _specializationService.Create(dto);

            return Created($"/api/specializations/{id}", null);
        }

        [HttpGet]
        [Route("GetSpecializations")]
        public ActionResult<IEnumerable<Specialization>> GetAll()
        {
            var specializationsDtos = _specializationService.GetAll();

            return Ok(specializationsDtos);
        }

        //[HttpGet("{id}")]
        //public ActionResult<Specialization> Get([FromRoute] int id)
        //{
        //    var specialization = _specializationService.GetById(id);
        //    return Ok(specialization);
        //}

        //[HttpPut("{id}")]
        //public ActionResult Update([FromRoute] int id, [FromBody] Specialization dto)
        //{
        //    _specializationService.Update(id, dto);
        //    return Ok();
        //}

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            _specializationService.Delete(id);

            return NoContent();
        }
    }
}
