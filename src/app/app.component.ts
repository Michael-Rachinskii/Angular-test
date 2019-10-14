import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AppService } from './app.service';
import { cellRenderImg, cellRenderTime, cellRenderVideoLink } from './helpers/utils';
import * as moment from 'moment';

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
  private gridOptions: GridOptions = { rowData: [], pivotRowTotals: 'after' } ;
  private loading = false;

  constructor(private appService: AppService) {
    this.gridOptions.columnDefs = [
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
        width: 300
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
    this.appService.getDataFromAPI()
      .subscribe((data: any) => {
        const { items }: { items: any[] } = data;
        this.loading = false;
        this.gridOptions.rowData = items.map((dataItem: any) => ({
          thumbnails: dataItem.snippet.thumbnails.high.url,
          publishedAt: dataItem.snippet.publishedAt,
          titleLink: { title: dataItem.snippet.title, videoId: dataItem.id.videoId },
          description: dataItem.snippet.description,
        }));
    }, (error) => {
      this.loading = false;
      console.log(error.message);
    });
  }
}
