import * as moment from 'moment';

export interface ICellParamsArgs {
  api: { refreshHeader(): void; };
  node: {
    setSelected(value: boolean): void;
    isSelected(): boolean;
  };
  value: any;
}

export const cellRenderImg = (params: ICellParamsArgs): string => `
    <img style="width: 100%; height: 200px; display: flex; align-items: center;" src="${params.value}" lazy-src alt="">
`;

export const cellRenderTime = (params: ICellParamsArgs): string => `${moment(params.value)
  .format('LLL')}`;

export const cellRenderVideoLink = (params: ICellParamsArgs): string => `
    <a href="https://www.youtube.com/watch?v=${params.value.videoId}">${params.value.title}</a>
`;

const createCheckbox = (isChecked: boolean): HTMLInputElement => {
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  if (isChecked) {
    newCheckbox.setAttribute('checked', 'checked');
  }
  newCheckbox.classList.add('select-checkbox');

  return newCheckbox;
};

export const cellRendererSelectRowCheckbox = (params: ICellParamsArgs): HTMLElement => {
  const rowCheckbox = createCheckbox(params.node.isSelected());
  rowCheckbox.addEventListener('change', (event: Event): void => {
    params.node.setSelected((event.target as HTMLInputElement).checked);
    params.api.refreshHeader();
  });

  return rowCheckbox;
};
