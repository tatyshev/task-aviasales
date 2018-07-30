import { combineReducers } from 'redux';
import { IAction, INullStr, IState, ITicket } from './interfaces';

import {
  SET_CURRENCY,
  SET_TICKETS,
  SET_TRANSFERS,
} from '@/state/actionTypes';

const currency = (state: INullStr = 'RUB', { type, payload }: IAction<INullStr>) => {
  if (type === SET_CURRENCY) { return payload; }
  return state;
};

const transfers = (state: number[] = [0, 1, 2, 3], { type, payload }: IAction<number[]>) => {
  if (type === SET_TRANSFERS) { return payload; }
  return state;
};

const tickets = (state: ITicket[] = [], { type, payload }: IAction<ITicket[]>) => {
  if (type === SET_TICKETS) { return payload; }
  return state;
};

export default combineReducers<IState>({
  currency,
  transfers,
  tickets,
});
