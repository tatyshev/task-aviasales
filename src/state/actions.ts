import { SET_CURRENCY, SET_TICKETS, SET_TRANSFERS } from './actionTypes';
import { INullStr, ITicket } from './interfaces';

export const setCurrency = (currency: INullStr) => {
  return { type: SET_CURRENCY, payload: currency };
};

export const setTransfers = (transfers: number[]) => {
  return { type: SET_TRANSFERS, payload: transfers };
};

export const setTickets = (tickets: ITicket[]) => {
  return { type: SET_TICKETS, payload: tickets };
};
