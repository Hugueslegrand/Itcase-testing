import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  getTableList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Tables/GetTableNames');
  }
  /*addDatabase(val: any) {
    return this.http.post(this.APIUrl + '/Tables', val);
  }*/
  selectedTable(val: string): any {
    console.log(val);
    return this.http.post(this.APIUrl + '/Tables/SelectTable', val);
  }

  getColumnList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Columns/getColumnNames');
  }

  selectedColumn(val: string): any {
    console.log(val);
    return this.http.post(this.APIUrl + '/Columns', val);
  }

  getValues(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Values/getValueNames');
  }
  getValuesArray(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Values/getValuesArray');
  }
  // nieuwe functie aanmaken in .net voor het opvragen van een array met daarin de waardes van alle geselecteerde

  selectDatabase(CountryCode: string): Observable<any>{
    return this.http.post(this.APIUrl + "/Tables/Connect?CountryCode=" + CountryCode,"");
  }
  getColumnArray():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/Columns/columnArray');
  }

  sendArray(data: any): Observable<any>{
    let selectedColumns =  [
      {
        id: 1,
        varA: 'a',
        varB: 'b',
        varC: 'c',
        varD: 'd',
      },
      {
        varA: 'a',
        varB: 'b',
        varC: 'c',
        varD: 'd',
      },
      {
        id: 2,
        varA: 'a',
        varB: 'b',
        varC: 'c',
        varD: 'd',
      },
      {
        id: 3,
        varA: 'a',
        varB: 'b',
        varC: 'c',
        varD: 'd',
      },
      {
        id: 4,
        varA: 'a',
        varB: 'b',
        varC: 'c',
        varD: 'd',
      },
      {
        id: 5,
        varA: 'a',
        varB: 'b',
        varC: 'c',
        varD: 'd',
      },
    ];
    return this.http.post(this.APIUrl + "/Columns/FormArray", data);
  }

}