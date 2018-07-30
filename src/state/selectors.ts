import { IState } from './interfaces';

export const filteredTickets = (state: IState) => {
  let { tickets } = state;

  tickets = tickets.filter((ticket) =>
    state.transfers.indexOf(ticket.stops) !== -1);

  return tickets;
};
