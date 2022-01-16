import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataServiceService } from '../get-data-service.service';
import { TableInterface } from '../tableInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ColumnServiceService } from '../columns.service';
import { Observable, subscribeOn } from 'rxjs';
import { SharedService } from '../shared.service';

export interface ColumnsInterface {
  constants: string;
  functions: string;
  target: string;
  source: string[];
}


//const test :ColumnsInterface[] =[]; 
let ELEMENT_DATA: any[] ;
[/*{"Id":"684C79C5-9BE0-4413-A515-40D1370194FB","Name":"Backoffice e2e (finished)","Code":"backoffice-e2e-finished","ContactTo": "","Date":"2020-09-11 00:00:00.0000000","OpenForNewRegistrations":1,"Finished":1},
{"Id":"C9133F95-65AE-4710-A1D0-605086919424","Name":"Backoffice e2e","Code":"backoffice-e2e","ContactTo": "string","Date":"2018-09-11 00:00:00.0000000","OpenForNewRegistrations":1,"Finished":0},
{"Id":"4DF8A21F-1F68-428D-AEDB-A3387C2FC01D","Name":"DEMO1","Code":"cit-1","ContactTo": "internetcollectief@eigenhuis.nl","Date":"2020-05-19 15:22:36.7230000","OpenForNewRegistrations":0,"Finished":1},
{"Id":"5DF4E38D-F461-4271-9491-D400AC8E8FE7","Name":"DEMO2","Code":"cit-2","ContactTo": "internetcollectief@eigenhuis.nl","Date":"2021-02-01 09:00:00.0000000","OpenForNewRegistrations":1,"Finished":0},
{"Id":"159CE26F-A8E2-41A6-8C7D-FB4AD8BCD13F","Name":"Backoffice e2e (no auto proposals)","Code":"backoffice-e2e-no-auto-make-proposals","ContactTo": "","Date":"2020-09-11 00:00:00.0000000","OpenForNewRegistrations":1,"Finished":0}*/];

@Component({
  selector: 'app-export-table',
  templateUrl: './export-table.component.html',
  styleUrls: ['./export-table.component.css']
})


export class ExportTableComponent implements OnInit {
  //ELEMENT_DATA : TableInterface[] = [];
 // displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered']; 
  temp: Observable<any>[] = [];
  //dataSource = new MatTableDataSource<TableInterface>(this.ELEMENT_DATA);
  dataSource = ELEMENT_DATA;
 // columnsTest = test;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true}) sort!: MatSort;
  constructor(private sharedService: SharedService, private columnServiceService: ColumnServiceService) { }
  

  get displayedColumns(): string[] {return this.columnServiceService.displayedColumns} 


  ngOnInit() {
   /* this.sharedService.getColumnArray().subscribe(data=>{
     this.columnsTest = data;
      console.log("dataSource= "+ this.dataSource)
      this.columnsTest.forEach((element) => {
        console.log("element in data= "+element.source)
      });
    })*/
    this.sharedService.getValuesArray().subscribe((data)=> {
     
      console.log("valuesArray= "+data)
      data.forEach(element => {
        element.forEach((element: any) => {
          console.log("dat= "+element);
       
        }); 
          
          ELEMENT_DATA = element
          console.log("element" +element[0]);
        
      });
      console.log("element data = "+ELEMENT_DATA)
    })
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort=this.sort;
    //this.getAllReports();
  }

 /* public getAllReports(){
    let resp = this.sharedService.getValues();
    resp.subscribe(report=>this.dataSource.data=report  as TableInterface[])
  }*/

  /*applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
}