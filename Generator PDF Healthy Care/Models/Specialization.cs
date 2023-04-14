using Generator_PDF_Healthy_Care.Models;
using System.ComponentModel.DataAnnotations;

public class Specialization
{
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [StringLength(50, ErrorMessage = "Name cannot be longer than 50 characters")]
    public string Name { get; set; }

    [StringLength(200, ErrorMessage = "Description cannot be longer than 200 characters")]
    public string? Description { get; set; }


    public ICollection<Doctor>? Doctors { get; set; }
}