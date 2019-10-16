import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { CustomHeaderCheckboxComponent } from './custom-header-checkbox/custom-header-checkbox.component';
import { CellContextMenuEvent, GetMainMenuItemsParams, GridOptions } from 'ag-grid-community';
import { MenuItemDef } from 'ag-grid-community/src/ts/entities/gridOptions';
import 'ag-grid-enterprise';
import {
  cellRendererSelectRowCheckbox,
  cellRenderImg,
  cellRenderTime,
  cellRenderVideoLink,
} from './helpers/utils';

interface IApiDataItem {
  snippet: {
    description: string;
    title: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  id: {
    videoId: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    '../../node_modules/ag-grid-community/dist/styles/ag-grid.css',
    '../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'
  ]
})
export class AppComponent implements OnInit {
  private gridOptions: GridOptions = {
    rowData: [],
    onSelectionChanged: this.rowSelectHandler.bind(this),
    suppressCellSelection: true,
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
    popupParent: document.querySelector('body'),
    allowContextMenuWithControlKey: true,
    getContextMenuItems: this.getContextMenuItems.bind(this),
  };
  private loading = false;
  private selectedQuantity = 0;
  private selectionMode = false;
  private totalQuantity = 0;

  constructor(private appService: AppService) {
    this.gridOptions.columnDefs = [
      {
        colId: 'select-checkboxes',
        cellClass: 'select-cell',
        hide: true,
        width: 50,
        cellRenderer: cellRendererSelectRowCheckbox,
        headerComponentFramework: CustomHeaderCheckboxComponent,
        headerComponentParams: { ...this.gridOptions },
        headerClass: 'select-cell',
      },
      {
        autoHeight: true,
        cellRenderer: cellRenderImg,
        field: 'thumbnails',
        headerName: '',
        width: 300,
      },
      {
        cellRenderer: cellRenderVideoLink,
        field: 'titleLink',
        headerName: 'Title',
        width: 300,
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 600
      },
      {
        cellRenderer: cellRenderTime,
        field: 'publishedAt',
        headerName: 'Published on',
        width: 250
      },
    ];
  }
  ngOnInit(): void {
    this.loading = true;
    this.appService.getDataFromAPI()
      .subscribe((data: any) => {
        const { items }: { items: any[] } = data;
        this.loading = false;
        this.gridOptions.rowData.push(...items.map((dataItem: IApiDataItem) => ({
          thumbnails: dataItem.snippet.thumbnails.high.url,
          publishedAt: dataItem.snippet.publishedAt,
          titleLink: { title: dataItem.snippet.title, videoId: dataItem.id.videoId },
          description: dataItem.snippet.description,
        })));
        this.totalQuantity = this.gridOptions.rowData.length;
    }, (error) => {
      this.loading = false;
      console.log(error.message);
    });
  }

  onToggleSelectionMode(): void {
    this.selectionMode = !this.selectionMode;
    this.gridOptions.columnApi.setColumnVisible('select-checkboxes', this.selectionMode);
  }

  rowSelectHandler(): void {
    this.selectedQuantity = this.gridOptions.api.getSelectedRows().length;
    const renderedNodes = this.gridOptions.api.getRenderedNodes();
    this.gridOptions.api.refreshCells({ rowNodes: renderedNodes, force: true });
  }

  getContextMenuItems(params): (string | MenuItemDef)[] {
    const defaultMenu = [ 'copy', 'copyWithHeaders', 'paste' ];
    const openInTheNewTab: MenuItemDef = {
      name: 'Open in the new tab',
      action: () => {
        window.open(`https://www.youtube.com/watch?v=${params.value.videoId}`, '_blank');
      },
      icon: '⧉',
    };

    return  params.column.colId === 'titleLink' ? [ ...defaultMenu, 'separator', openInTheNewTab ] : defaultMenu;
  }
}

