using my_new_app.Controllers;
using my_new_app.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_new_app.Data.Services
{
    public interface IColumnsService
    {
        string getSelectedColumn();
        void SetSelectedColumn(string selectedColumn);
        string[] getSelectedColumnForValues();
        void setSelectedColumnForValues(string[] selectedColumnsForValues);
        void SetSelectedColumnArray(string data);
        string getColumnArray();
    }

    public class ColumnsService : IColumnsService
    {
        private string selectedColumn;
        private string selectedColumnArray;
        private string[] selectedColumnsForValues;

        public string[] getSelectedColumnForValues() {
            return selectedColumnsForValues;
         }
       public void setSelectedColumnForValues(string[] selectedColumnsForValues) {

            this.selectedColumnsForValues = selectedColumnsForValues;
        }
        public string getSelectedColumn()
        {
            return selectedColumn;
        }

        public string getColumnArray()
        {
            
            return selectedColumnArray;
        }
        public void SetSelectedColumnArray(string data)
        {
            this.selectedColumnArray = data;
        }

        public void SetSelectedColumn(string selectedColumn)
        {
            this.selectedColumn = selectedColumn;
        }

    }
}
