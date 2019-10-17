import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { CustomHeaderCheckboxComponent } from './components/custom-header-checkbox/custom-header-checkbox.component';
import { HomeComponent } from './home.component';
import { HomeService } from './services';

@NgModule({
  declarations: [
    CustomHeaderCheckboxComponent,
    HomeComponent,
  ],
  imports: [
    AgGridModule.withComponents([CustomHeaderCheckboxComponent]),
    FormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  exports: [ HomeComponent ],
  providers: [ HomeService ],
  bootstrap: [ HomeComponent ],
})

export class HomeModule { }
