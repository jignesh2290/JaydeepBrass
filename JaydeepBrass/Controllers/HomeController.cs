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
        public void SendMessage(string name,string email,string phone,string message)
        {
            const string fromAddress = "jaydeepjayanti@jaydeepbrass.com";
            const string toAddress = "jaydeepjayanti@jaydeepbrass.com";
            string subject = "Query by :" + email;
            string body = "Customer :" + "\n\n";
            body += "Name: " + name + "\n\n";
            body += "Email Address: " + email + "\n\n";
            body += "Contact: " + phone + "\n\n";
            body += "Message : "+ message;
              
            var smtp = new System.Net.Mail.SmtpClient();
            {
                smtp.Host = "relay-hosting.secureserver.net";
                smtp.Port = 25;
                smtp.Timeout = 20000;
            }
            // Passing values to smtp object
            smtp.Send(fromAddress, toAddress, subject, body);
         }
    }
}