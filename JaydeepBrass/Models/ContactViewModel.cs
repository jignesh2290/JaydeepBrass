using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JaydeepBrass.Models
{
    public class ContactViewModel
    {
        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Display(Name = "Contact")]
        public string ContactNo { get; set; }

        [Display(Name = "Message")]
        public string Message { get; set; }
    }  
}
