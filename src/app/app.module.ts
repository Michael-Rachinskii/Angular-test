import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CustomHeaderCheckboxComponent } from './custom-header-checkbox/custom-header-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ CustomHeaderCheckboxComponent ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
