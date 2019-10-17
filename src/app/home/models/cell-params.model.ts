export interface ICellParamsArgs {
  api: { refreshHeader(): void; };
  node: {
    setSelected(value: boolean): void;
    isSelected(): boolean;
  };
  value: any;
}
