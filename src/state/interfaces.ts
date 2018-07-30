import { ITicket } from './interfaces';
export interface IAction<T> {
  type: string;
  payload: T;
}

export type INullStr = string | null | undefined;

export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export interface IState {
  currency: INullStr;
  transfers: number[];
  tickets: ITicket[];
}
