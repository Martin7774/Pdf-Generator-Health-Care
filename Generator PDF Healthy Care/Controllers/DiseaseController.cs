using Generator_PDF_Healthy_Care.Models;
using Generator_PDF_Healthy_Care.Service;
using Microsoft.AspNetCore.Mvc;

namespace Generator_PDF_Healthy_Care.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiseaseController : ControllerBase
    {
        private readonly IDiseaseService _diseaseService;

        public DiseaseController(IDiseaseService diseaseService)
        {
            _diseaseService = diseaseService;
        }

        [HttpPost]
        [Route("CreateDisease")]
        public ActionResult CreateDisease([FromBody] Disease dto)
        {
            var id = _diseaseService.Create(dto);

            return Created($"/api/diseases/{id}", null);
        }

        [HttpGet]
        [Route("GetDiseases")]
        public ActionResult<IEnumerable<Disease>> GetAll()
        {
            var diseasesDtos = _diseaseService.GetAll();

            return Ok(diseasesDtos);
        }

        //[HttpGet("{id}")]
        //public ActionResult<Disease> Get([FromRoute] int id)
        //{
        //    var disease = _diseaseService.GetById(id);
        //    return Ok(disease);
        //}

        //[HttpPut("{id}")]
        //public ActionResult Update([FromRoute] int id, [FromBody] Disease dto)
        //{
        //    _diseaseService.Update(id, dto);
        //    return Ok();
        //}

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            _diseaseService.Delete(id);

            return NoContent();
        }
    }
}
