import Ticket from '@/components/Ticket';
import { IState, ITicket } from '@/state/interfaces';
import { filteredTickets } from '@/state/selectors';
import React from 'react';
import { connect } from 'react-redux';

interface ITicketsProps {
  tickets: ITicket[];
}

const Tickets = ({ tickets = [] }: ITicketsProps) => (
  <div className='b-tickets'>
    {tickets.map((ticket, i) => <Ticket ticket={ticket} key={i}/>)}
  </div>
);

const mapStateToProps = (state: IState) => ({
  tickets: filteredTickets(state),
});

export default connect(mapStateToProps)(Tickets);
