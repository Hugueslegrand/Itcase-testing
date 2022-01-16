import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ColumnComponent } from '../column/column.component';
import { ColumnServiceService } from '../columns.service';
import { SharedService } from '../shared.service';

interface AddColumn {
  columnNames: string;
}

interface RowObject {
  source: string[];
  functions: string;
  constants: string;
  target: string;
}

interface FormArr {
  configName: string;
  rowArray: RowObject[];
  ready: boolean;
}

interface FormArrObj{
  object: FormArr
}



@Component({
  selector: 'configurationBuilder.component',
  templateUrl: './configurationBuilder.component.html',
  styleUrls: ['./configurationBuilder.component.css'],
})
export class ConfigurationBuilderComponent implements OnInit {
  /*
    formDataArr: FormObject = {
      configName: "",
      source: [],
      functions: "",
      constants: "",
      target: "",
      ready: false
    };
    selected: string[] = [];
    changeSelect = (data: any) => {
      this.selected = data;
      console.log(data)
    };
  */

  //===============================================
  formDataArr: FormArrObj = {
    object:{
      configName: "",
      rowArray: [],
      ready: false
    },
  };

    changeSelect = (data: string[], index: number) => {
      // this.form.value.rows[index].source.setValue(data);
      
      this.rows.controls[index].get("source")?.setValue(data);
      // console.log(data)
      // console.log(this.form.value.rows[index]);
    }

  form = this.fb.group({
    configName: ['', Validators.required],
    rows: this.fb.array([], Validators.required),
    ready: [false, Validators.required]
  });

  get rows() {
    return this.form.controls['rows'] as FormArray;
  }

  get rowControls(){
    return this.rows.controls.map(control => control as FormGroup)
  }


  //===============================================
  //===============================================
  // rowForm = this.fb.group({
  //   source: [[], Validators.required],
  //   functions: ['', Validators.required],
  //   constants: ['', Validators.required],
  //   target: ['', Validators.required],
  // });


  addRow() {
    // let newRow = this.rowForm;
    // this.rows.push(newRow);
    const rowForm = this.fb.group({
        source: [[], Validators.required],
        functions: ['', Validators.required],
        constants: ['', Validators.required],
        target: ['', Validators.required],
      });
    this.rows.push(rowForm);
  }

  deleteRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }
  //===============================================
  //===============================================
  options = new FormControl();
  optionsList: string[] = [];

  // form: FormGroup = new FormGroup({});
  submitted = false;

  //From tables component
  tableList: any = [];
  modalTitle: any;
  activateAddEditTaCom: boolean = false;
  table: any;

  //From columns component
  columnList: any = [];
  // modalTitle:any;
  activateAddEditColCom: boolean = false;
  column: any;
  addColumnString = '';

  constructor(private sharedService: SharedService, private fb: FormBuilder, private columnServiceService: ColumnServiceService, private router: Router) {
    this.addRow();
  }

  ngOnInit(): void {
    // this.refreshTableList();
    this.refreshColumnList();
  }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  onSubmit(): void {
    this.submitted = true;

    //Here you can find the data filled in by the form and stored as a varriable named formData.
    var formData: any = JSON.stringify(this.form.value, null, 2);
    this.formDataArr = JSON.parse(formData);
    console.log(this.formDataArr);
    let apiObject = { formArray: this.formDataArr};
    console.log(apiObject);
    this.sharedService.sendArray(apiObject).subscribe((res) => {
      console.log(formData);
    });
    let columns: string[]=[];
    columns= this.rows.controls.map(control => (control?.get('source')?.value)).flat(1);
    console.log(columns);
    this.columnServiceService.displayedColumns = columns;
    console.log(this.columnServiceService.displayedColumns);
    this.router.navigate(['export-table']);
  }

  //From tables component
  //=====================
  // refreshTableList() {
  //   this.sharedService.getTableList().subscribe((data) => {
  //     this.tableList = data;
  //     console.log(this.tableList);
  //   });
  // }
  // //Function to save selected table from the onclick
  // selectedTable(item: any) {
  //   this.table = item;
  //   this.modalTitle = 'Select Table';
  //   this.activateAddEditTaCom = true;
  //   //Send the value to the post request
  //   this.sharedService.selectedTable(item);
  //   console.log(item.tableNames);
  // }

  //From columns component
  //======================
  refreshColumnList() {
    this.sharedService.getColumnList().subscribe((data) => {
      this.columnList = data;
      // console.log(this.columnList);
      this.columnList.forEach((e: any) => {
        this.optionsList.push(e.columnNames);
      });
    });
  }
  //Function to save selected column from the onclick
  selectedColumn(item: any) {
    this.column = item;
    this.modalTitle = 'Select Column';
    this.activateAddEditColCom = true;
    //Send the value to the post request
    this.sharedService.selectedColumn(item);
    // console.log(item.columnNames);
  }

}