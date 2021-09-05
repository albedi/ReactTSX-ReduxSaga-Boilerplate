export interface Item {
  base: string;
  date: string;
  rates: {USD:number, MXN: number, EUR: number};
  success: boolean;
  error: {info: string};
}

export interface InicioMdStt {
  error: any;
  loading: boolean;
  toFind: boolean;
  item: Item | undefined;
}
