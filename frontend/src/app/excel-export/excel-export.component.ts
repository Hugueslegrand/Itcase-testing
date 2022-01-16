import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.css']
})
export class ExcelExportComponent implements OnInit {

fileName= 'ExcelSheet.xlsx';

  data: any = [
    {
       
        "id": 1,
        "name": "Hugues",
        "lastName": "Legrand",
        "email": "Hugues.Legrand@ap.be",
        "role": "student"
    },
    {
       
        "id": 2,
        "name": "Nick",
        "lastName": "Mathieu",
        "email": "Nick.Mathieu@ap.be",
        "role": "student"
    },
    {
     
        "id": 3,
        "name": "Cedric",
        "lastName": "Van Roost",
        "email": "Cedric.VanRoost@ap.be",
        "role": "student"
    },
    {
     
        "id": 4,
        "name": "Ibragim",
        "lastName": "Ismailov",
        "email": "Ibragim.Ismailov@ap.be",
        "role": "student"
    },
    {
     
        "id": 5,
        "name": "Rien",
        "lastName": "Strackx",
        "email": "Rien@ichoosr.be",
        "role": "mentor"
    },
    {
     
        "id": 6,
        "name": "John",
        "lastName": "Doe",
        "email": "John.Doe@client.com",
        "role": "client"
    }
]

exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

  constructor() {}

  ngOnInit(): void {
  }
 

}
