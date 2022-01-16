using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using my_new_app.Data.Services;
using my_new_app.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;



namespace my_new_app.Controllers
{
    public class RowObject
    {        
        public string constants { get; set; }
        public string functions { get; set; }
        public string target { get; set; }
        public string[] source { get; set; }
    }

    public class FormArray
    {
        public string configName { get; set; }
        public RowObject[] rows { get; set; }
        public bool ready { get; set; }
    }

    public class FormArrayObject
    {
        public FormArray formArray { get; set; }
    }

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ColumnsController : Controller
    {
        public string selectedColumn;
        SqlCommand com = new SqlCommand();
        SqlDataReader dr;
        SqlConnection con = new SqlConnection();
        List<ColumnNames> columnNames = new List<ColumnNames>();

        private readonly IConfiguration _configuration;
        private readonly IDatabaseService _databaseService;
        private readonly ITablesService _tablesService;
        private readonly IColumnsService _columnsService;

        public ColumnsController(IConfiguration configuration, IDatabaseService databaseService, ITablesService tablesService, IColumnsService columnsService)
        {
            _configuration = configuration;
            _databaseService = databaseService;
            _tablesService = tablesService;
            _columnsService = columnsService;
            con.ConnectionString = _configuration.GetConnectionString("TestConnectionString");
        }
        
        [HttpPost()]
        public IActionResult FormArray([FromBody] FormArrayObject data)
        {
            Console.WriteLine("rows= "+data.formArray.rows);
            _columnsService.SetSelectedColumnArray(JsonConvert.SerializeObject(data.formArray.rows));

            //Console.WriteLine(data.formArray.configName);

            string[] columns = new string[] { };
            var tempList = columns.ToList();
            foreach (var row in data.formArray.rows)
            {
                tempList.Add(JsonConvert.SerializeObject(row.source[0]));

            }
            columns = tempList.ToArray();
            foreach (var name in columns)
            {
                Console.WriteLine("column= " + name);
            }
            _columnsService.setSelectedColumnForValues(columns);

            Console.WriteLine($"CONFIG NAME: {JsonConvert.SerializeObject(data.formArray.configName.ToUpper())}");
            foreach (var row in data.formArray.rows)
            {
                Console.WriteLine(JsonConvert.SerializeObject(row.source[0]));
            }

            return Ok("valuesArray succeeded");
        }
        [HttpGet()]
        public string columnArray(string columnArray)
        {
            columnArray = _columnsService.getColumnArray();
            
            return columnArray;
        }

        [HttpGet()]
        public string getSelectedTable(string selectedTable)
        {
            return selectedTable;
        }

        [HttpPost()]
        public IActionResult SelectColumn([FromQuery] string columnName)
        {
            _columnsService.SetSelectedColumn(columnName);

            //TODO: Store selected column in column services

            return Ok();

        }

        private void FetchColumnNames()
        {
            // Fetch column names in database
            if (columnNames.Count > 0)
            {
                columnNames.Clear();
            }
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "Select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Auctions';"; //'{_tablesService.getSelectedTable()}';"
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    columnNames.Add(new ColumnNames()
                    {
                        columnNames = dr["column_name"].ToString()

                    });
                } 
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
       

        [HttpGet()]
        public List<ColumnNames> GetColumnNames()
        {
            FetchColumnNames();
            return columnNames;
        }
    }
}
