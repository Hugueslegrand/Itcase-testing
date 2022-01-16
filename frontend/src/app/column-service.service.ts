import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnServiceService {

  private _displayedColumns: string[];

  get displayedColumns(): string[] {return this._displayedColumns};
  set displayedColumns(kolommen: string[]) {this._displayedColumns = kolommen};

  constructor() { }
}
