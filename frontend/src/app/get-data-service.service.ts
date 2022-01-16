import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(private http:HttpClient) { }

  public getDataService() {
    return  this.http.get("https://corona.lmao.ninja/v2/countries");
    }
}
