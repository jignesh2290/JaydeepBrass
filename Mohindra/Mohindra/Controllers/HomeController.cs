using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mohindra.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
//            //here on button click what will done 
//            SendMail();
//            name.Value = "";
//            contactNo.Value = "";
//            email.Value = "";
//            message.Value = "";

//    protected void SendMail()
//    {
//        try
//        {
//            var fromAddress = "info@viraam.com";
//            var toAddress = email.Value;
//            var customerName = name.Value;
//            string subject = "Query for Viraam : Viraam Website Contact Us Page";
//            string body = message.Value + "\n" + "\n";
//            body += "Regards" + "\n";
//            body += name.Value + "\n";
//            body += email.Value + "\n";
//            body +=contactNo.Value;
//            var tobody = "Hello " + customerName.ToString() + " !" + "\n" + "\n";
//            tobody += "Thank you for contacting Viraam. We will be in contact with you shortly to discuss the next steps" + "\n" + "\n";
//            tobody += "Regards" + "\n";
//            tobody += "www.viraam.com";
//            var toSubject = "Thank you for contacting Viraam";

//            var toAddress1 = "rajisab@viraam.com";
//            var toAddress2 = " vibhor.sharma@viraam.com";
//            var toAddress3 = "gkr@viraam.com";
            

          
//            // smtp settings
//            var smtp = new System.Net.Mail.SmtpClient();
//            {
//                smtp.Host = "relay-hosting.secureserver.net";
//               // smtp.Host = "aspmx.l.google.com";
//                smtp.Port = 25;
//                smtp.Timeout = 20000;
//            }
//            // Passing values to smtp object
//            smtp.Send(fromAddress, toAddress, toSubject, tobody);
//            smtp.Send(toAddress, toAddress1, subject, body);
//            smtp.Send(toAddress, toAddress2, subject, body);
//            smtp.Send(toAddress, toAddress3, subject, body);
//            Response.Write("<script>alert('Your message has been successfully sent')</script>");
           
//        }
//        catch (Exception ex)
//        {
//            Response.Write("alert('" + ex.Message + "')");
//        }
//    }
//}
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}