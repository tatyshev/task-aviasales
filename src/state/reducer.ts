import { combineReducers } from 'redux';
import { IAction, INullStr, ITicket } from './interfaces';

import {
  SET_CURRENCY,
  SET_TICKETS,
  SET_TRANSFERS,
} from '@/state/actionTypes';

const currency = (state: INullStr = null, { type, payload }: IAction<string>) => {
  if (type === SET_CURRENCY) { return payload; }
  return state;
};

const transfer = (state: INullStr = null, { type, payload }: IAction<string>) => {
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
