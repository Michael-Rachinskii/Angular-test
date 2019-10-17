import * as moment from 'moment';

import { ICellParamsArgs } from '../home/models';
import {
  cellRendererSelectRowCheckbox,
  cellRenderImg,
  cellRenderTime,
  cellRenderVideoLink,
} from './utils';

const rawParams = {
  node: {
    isSelected(): boolean { return true; },
    setSelected(value): void {
      console.log(value ? 'selected!' : 'deselected!');
    }
  },
  api: {
    refreshHeader(): void {
      console.log('refreshed!');
    }
  },
  value: '',
};

describe('utils', () => {
  it('should create the checkbox', () => {
    const params: ICellParamsArgs = rawParams;
    const checkbox = cellRendererSelectRowCheckbox(params);
    expect(checkbox.getAttribute('type'))
      .toContain('checkbox');
    expect(Boolean(checkbox.getAttribute('checked')))
      .toBeTruthy();
  });
  it('should create the string with link to YouTube', () => {
    const params: ICellParamsArgs = rawParams;
    params.value = { videoId: 1, title: 1 };
    const expectedString = cellRenderVideoLink(params);
    expect(expectedString.includes(`<a href="https://www.youtube.com/watch?v=${params.value.videoId}">${params.value.title}</a>`))
      .toBeTruthy();
  });
  it('should create the string with link to image', () => {
    const params: ICellParamsArgs = rawParams;
    const expectedString = cellRenderImg(params);
    expect(expectedString.includes(
      `<img class="image-cell" src="${params.value}" lazy-src alt="Image was not loaded">`
    ))
      .toBeTruthy();
  });
  it('should create the string with formatted time', () => {
    const params: ICellParamsArgs = rawParams;
    params.value = (new Date()).toJSON();
    const expectedString = cellRenderTime(params);
    expect(expectedString.includes(`${moment(params.value)
        .format('LLL')}`))
      .toBeTruthy();
  });
});
