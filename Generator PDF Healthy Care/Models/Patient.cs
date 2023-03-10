using System.ComponentModel.DataAnnotations;

namespace Generator_PDF_Healthy_Care.Models
{
    public class Patient
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "First name is required.")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "First name should be between 2 and 50 characters.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required.")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Last name should be between 2 and 50 characters.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Date of birth is required.")]
        [DataType(DataType.Date, ErrorMessage = "Invalid date format.")]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "PESEL is required.")]
        [StringLength(11, MinimumLength = 11, ErrorMessage = "PESEL should be 11 characters long.")]
        public string Pesel { get; set; }

        [Required(ErrorMessage = "Street is required.")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Street should be between 2 and 100 characters.")]
        public string Street { get; set; }

        [Required(ErrorMessage = "Phone number is required.")]
        [RegularExpression(@"^[0-9]+$", ErrorMessage = "Invalid phone number format.")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }

    }
}
