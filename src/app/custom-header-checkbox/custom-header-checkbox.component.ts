import { Component } from '@angular/core';
import { GridApi, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-custom-header-checkbox',
  templateUrl: './custom-header-checkbox.component.html',
  styleUrls: ['./custom-header-checkbox.component.css']
})
export class CustomHeaderCheckboxComponent {
  api: GridApi;
  isChecked: boolean;

  agInit(params: GridOptions): void {
    this.api = params.api;
    this.isChecked = params.api.getSelectedRows().length === params.rowData.length;
  }

  onChange(event: Event): void {
    if ((event.target as HTMLInputElement).checked) {
      this.api.selectAll();
    } else {
      this.api.deselectAll();
    }
  }
}
