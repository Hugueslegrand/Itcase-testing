import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabaseSelectionComponent } from './database-selection/database-selection.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectMultipleExample } from './select-multiple-example';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatTableExporterModule } from 'mat-table-exporter';

import {MaterialExampleModule} from '../material.module'
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfigurationBuilderComponent } from './configurationBuilder/configurationBuilder.component';
import { TableComponent } from './table/table.component';
import { ColumnComponent } from './column/column.component';
import { ShowColComponent } from './column/show-col/show-col.component';
import { ShowTaComponent } from './table/show-ta/show-ta.component';
import { ExportTableComponent } from './export-table/export-table.component';
import { HardCodedExportComponent } from './hard-coded-export/hard-coded-export.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabaseSelectionComponent,
    SidenavComponent,
    SelectMultipleExample, 
    ConfigurationBuilderComponent, TableComponent, ColumnComponent, ShowColComponent, ShowTaComponent, ExportTableComponent, HardCodedExportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTableExporterModule
  ],

  exports: [
    MatFormFieldModule,
  ],

  providers: [],
  bootstrap: [AppComponent, /*SelectMultipleExample*/],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
