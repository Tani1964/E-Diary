using Microsoft.AspNetCore.Mvc;

namespace EDiary.Controllers
{
    public class NoAuth : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // No Auth
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Signup()
        {
            return View();
        }
    }
}
