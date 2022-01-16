import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface HardCodedTable {
  id: number;
  name: string;
  lastName: string;
  email: string;
  role: string;
}

const ELEMENT_DATA: HardCodedTable[] = [
  {id: 1, name: 'Hugues', lastName: 'Legrand', email: 'Hugues.Legrand@ap.be', role:'student'},
  {id: 2, name: 'Nick', lastName: 'Mathieu', email: 'Nick.Mathieu@ap.be', role:'student'},
  {id: 3, name: 'Cedric', lastName: 'Van Roost', email: 'Cedric.VanRoost@ap.be', role:'student'},
  {id: 4, name: 'Ibragim', lastName: 'Ismailov', email: 'Ibragim.Ismailov@ap.be', role:'student'},
  {id: 5, name: 'Rien', lastName: 'Strackx', email: 'Rien@ichoosr.be', role:'mentor'},
  {id: 6, name: 'John', lastName: 'Doe', email: 'John.Doe@client.com', role:'client'},
  
];

@Component({
  selector: 'app-hard-coded-export',
  templateUrl: './hard-coded-export.component.html',
  styleUrls: ['./hard-coded-export.component.css']
})
export class HardCodedExportComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'role'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor() { }

  ngOnInit() {
    
  }


}
