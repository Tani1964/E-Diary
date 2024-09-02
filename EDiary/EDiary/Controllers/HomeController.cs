using EDiary.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EDiary.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CreateEditNote()
        {
            if (id != null) {
                var noteInDb = _context.Notes.SingleOrDefault(note => note.Id == id);
                return View(noteInDb);
            }

            return View();
        }

        public IActionResult ViewPage()
        {
            return View();
        }

        public IActionResult Notfound()
        {
            return View();
        }

        public IActionResult CreateEdit()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

       

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
