using JaydeepBrass.Models;
using System;
using System.Web.Mvc;

namespace JaydeepBrass.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Contact(ContactViewModel model)
        {
            try
            {
                var fromAddress = "info@JaydeepBrassbookdepot.webs.com";
                var toAddress = model.Email;
                var customerName = model.Name;
                string subject = "Query for JaydeepBrass Book Depot : Contact Us Page";
                string body = model.Message + "\n" + "\n";
                body += "Regards" + "\n";
                body += model.Name + "\n";
                body += model.Email + "\n";
                body += model.ContactNo;
                var tobody = "Hello " + customerName.ToString() + " !" + "\n" + "\n";
                tobody += "Thank you for contacting JaydeepBrass Book Depot. We will be in contact with you shortly to discuss the next steps" + "\n" + "\n";
                tobody += "Regards" + "\n";
                tobody += "www.JaydeepBrassbookdepot.webs.com";
                var toSubject = "Thank you for contacting JaydeepBrass Book Depot";

                var toAddress1 = "rajisab@viraam.com";
                var toAddress2 = " vibhor.sharma@viraam.com";
                var toAddress3 = "gkr@viraam.com";


                // smtp settings
                //var smtp = new System.Net.Mail.SmtpClient();
                //{
                //    smtp.Host = "relay-hosting.secureserver.net";
                //    // smtp.Host = "aspmx.l.google.com";
                //    smtp.Port = 25;
                //    smtp.Timeout = 20000;
                //}
                //// Passing values to smtp object
                //smtp.Send(fromAddress, toAddress, toSubject, tobody);
                //smtp.Send(toAddress, toAddress1, subject, body);
                //smtp.Send(toAddress, toAddress2, subject, body);
                //smtp.Send(toAddress, toAddress3, subject, body);

                TempData["msg"] = "<script>alert('Your message has been successfully sent')</script>";
                return RedirectToAction("Index", "Home");

            }
            catch (Exception ex)
            {
                TempData["msg"] = "<script>alert(" + ex.Message + ");</script>";
                return View("Index");
            }
        }
    }
}