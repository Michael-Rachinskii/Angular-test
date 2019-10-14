import { ICellRendererParams } from 'ag-grid-community';
import * as moment from 'moment';

export const cellRenderImg = (params: ICellRendererParams): string => `
    <img style="width: 100%; height: 200px; display: flex; align-items: center;" src="${params.value}" lazy-src alt="">
`;

export const cellRenderTime = (params: ICellRendererParams): string => `${moment(params.value)
  .format('LLL')}`;

export const cellRenderVideoLink = (params: ICellRendererParams): string => `
    <a href="https://www.youtube.com/watch?v=${params.value.videoId}">${params.value.title}</a>
`;
