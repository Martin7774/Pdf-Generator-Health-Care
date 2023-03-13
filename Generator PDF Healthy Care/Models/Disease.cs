using System.ComponentModel.DataAnnotations;

namespace Generator_PDF_Healthy_Care.Models
{
    public class Disease
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Name should be between 2 and 100 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        [StringLength(500, MinimumLength = 10, ErrorMessage = "Description should be between 10 and 500 characters.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Symptoms are required.")]
        public string Symptoms { get; set; }

        [Required(ErrorMessage = "Causes are required.")]
        public string Causes { get; set; }

        [Required(ErrorMessage = "Treatments are required.")]
        public string Treatments { get; set; }

        [Required(ErrorMessage = "Prevention methods are required.")]
        public string Prevention { get; set; }
        [Required]
        public int PatientId { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
