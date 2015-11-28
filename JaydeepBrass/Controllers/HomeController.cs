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
        public ActionResult SendMessage(string name,string email,string phone,string message)
        {
            try
            {
                var fromAddress = "jaydeepjayanti@jaydeepbrass.com";
                var toAddress = "jaydeepjayanti@jaydeepbrass.com";
                var customerName = name;
                string subject = "Query by :" + email;
                string body = "Customer :" + "\n";
                body += name + "\n";
                body += email + "\n";
                body += phone + "\n";
                body += "Message : "+ message;
              
                var smtp = new System.Net.Mail.SmtpClient();
                {
                    smtp.Host = "relay-hosting.secureserver.net";
                    smtp.Port = 25;
                    smtp.Timeout = 20000;
                }
                // Passing values to smtp object
                smtp.Send(fromAddress, toAddress, subject, body);
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