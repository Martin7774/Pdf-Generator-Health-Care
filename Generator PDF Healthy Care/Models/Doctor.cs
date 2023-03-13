using System.ComponentModel.DataAnnotations;

namespace Generator_PDF_Healthy_Care.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "First name is required.")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "First name should be between 2 and 50 characters.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required.")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Last name should be between 2 and 50 characters.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Phone number is required.")]
        [RegularExpression(@"^[0-9]+$", ErrorMessage = "Invalid phone number format.")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Specialization is required.")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Specialization should be between 2 and 50 characters.")]
        public string Specialization { get; set; }

        [Required(ErrorMessage = "License number is required.")]
        [RegularExpression(@"^[0-9]+$", ErrorMessage = "Invalid license number format.")]
        public string LicenseNumber { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
    }
}
