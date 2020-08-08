using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DateController : ControllerBase
    {
        private readonly ILogger<DateController> _logger;

        public DateController(ILogger<DateController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var currentData = DateTime.Now;
            _logger.LogDebug("currentData: "+currentData);
            return Ok(new
            {
                Year = currentData.Year,
                Month = currentData.Month,
                Day = currentData.Day
            });
        }
    }
}