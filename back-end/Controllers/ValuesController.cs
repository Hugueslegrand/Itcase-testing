using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using my_new_app.Data.Models;
using my_new_app.Data.Services;
using my_new_app.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_new_app.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        SqlCommand com = new SqlCommand();
        SqlDataReader dr;
        SqlConnection con = new SqlConnection();
        List<ValueNames> valueNames = new List<ValueNames>();
        
        object[] valuesArray = new object[] { };
       

        private readonly IConfiguration _configuration;
        private readonly IDatabaseService _databaseService;
        private readonly ITablesService _tablesService;
        private readonly IColumnsService _columnsService;
        private readonly IValuesService _valuesService;


        public ValuesController(IConfiguration configuration, IDatabaseService databaseService, ITablesService tablesService, IColumnsService columnsService, IValuesService valuesService)
        {
            _configuration = configuration;
            _databaseService = databaseService;
            _tablesService = tablesService;
            _columnsService = columnsService;
            _valuesService = valuesService;
            con.ConnectionString = _configuration.GetConnectionString("TestConnectionString");
        }

        private void FetchValueNames()
        {

            var temp = valuesArray.ToList();
            List<object> another = new List<object>();
            foreach (var name in _columnsService.getSelectedColumnForValues())
            {

               
                if (valueNames.Count > 0)
                {
                    valueNames.Clear();
                }
                try
                {
                    Console.WriteLine("valuename= " + name);
                    con.Open();
                    com.Connection = con;
                    com.CommandText = $"select {name} from Auctions";//$"select \"{_columnsService.getSelectedColumn()}\" from {_tablesService.getSelectedTable()} ";
                    dr = com.ExecuteReader();
                    while (dr.Read())
                    {

                        valueNames.Add(new ValueNames()
                        {
                            valuesNames = dr[0].ToString()

                        }); 
                        
                    }
                  
                    foreach (var item in valueNames)
                    {
                        var objectJson = JsonConvert.SerializeObject(item);
 
                        var tes = objectJson.Replace("\"valuesNames\"",name);
                        Console
                            .WriteLine(tes);

                        another.Add(tes);
                     

                    }
                    Console.WriteLine(another);

                    dr.Close();
                    con.Close();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
                
            }
                temp.Add(another);
                valuesArray = temp.ToArray();
            
            // Fetch table names in database
            
            
        }

        [HttpGet("getValueNames")]
        public List<ValueNames> GetValueNames()
        {
            
            FetchValueNames();
            return valueNames;
        }

        [HttpGet("getValuesArray")]
        public object[] GetValuesArray()    
        {
            FetchValueNames();
            return valuesArray;
        }

        [HttpPost()]
        public IActionResult SelectValue([FromQuery] string valueName)
        {
            //Store value in value services

            _valuesService.SetSelectedValue(valueName);

            if (valueName == null)
            {
                return BadRequest("empty value");
            };

            return Ok("");

        }

    }
}
