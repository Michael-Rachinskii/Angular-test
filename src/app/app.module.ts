import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomHeaderCheckboxComponent } from './custom-header-checkbox/custom-header-checkbox.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([ CustomHeaderCheckboxComponent ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
