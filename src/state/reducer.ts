import { combineReducers } from 'redux';

import {
  SET_CURRENCY,
  SET_TICKETS,
  SET_TRANSFERS,
} from '@/state/actionTypes';

interface IAction<T> {
  type: string;
  payload: T;
}

type NullStr = string | null;

interface ITicket {
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

const currency = (state: NullStr = null, { type, payload }: IAction<string>) => {
  if (type === SET_CURRENCY) { return payload; }
  return state;
};

const transfer = (state: NullStr = null, { type, payload }: IAction<string>) => {
  if (type === SET_TRANSFERS) { return payload; }
  return state;
};

const tickets = (state: ITicket[] = [], { type, payload }: IAction<ITicket[]>) => {
  if (type === SET_TICKETS) { return payload; }
  return state;
};

export default combineReducers({
  currency,
  transfer,
  tickets,
});
