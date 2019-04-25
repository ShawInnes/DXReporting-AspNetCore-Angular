using System;
using System.Collections.Generic;
using DevExpress.DataAccess.Json;
using DevExpress.DataAccess.ObjectBinding;
using DevExpress.XtraReports.Web.ReportDesigner;
using Microsoft.AspNetCore.Mvc;

namespace DemoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportDesignerController : Controller
    {
        [HttpPost("[action]")]
        public ActionResult GetReportDesignerModel([FromForm] string reportUrl)
        {
            string modelJsonScript = new ReportDesignerClientSideModelGenerator(HttpContext.RequestServices).GetJsonModelScript(reportUrl, GetAvailableDataSources(), "/DXXRD", "/DXXRDV", "/DXXQB");
            return Content(modelJsonScript, "application/json");
        }

        Dictionary<string, object> GetAvailableDataSources()
        {
            var dataSources = new Dictionary<string, object>();
            var jsonDataSource = new ObjectDataSource();
            jsonDataSource.DataSource = new List<Car>()
            {
                new Car { Make = "Mazda", Model = "6", Year = 2004}
            };
            jsonDataSource.DataSourceType = typeof(Car);
            jsonDataSource.Fill();
            dataSources.Add("ObjectDataSource", jsonDataSource);
            return dataSources;
        }
    }

    public class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
    }
}
