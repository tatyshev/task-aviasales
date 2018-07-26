import { ITicket } from '@/state/interfaces';
import plural from 'plural-ru';
import React from 'react';

interface IRouteProps {
  ticket: ITicket;
}

export default ({ ticket }: IRouteProps) => (
  <div className='b-route'>
    <div className='b-route__from'>
      <div className='b-route__time'>{ticket.departure_time}</div>
      <div className='b-route__location'>{ticket.origin}, {ticket.origin_name}</div>
      <div className='b-route__date'>{ticket.departure_date}</div>
    </div>

    <div className='b-route__path'>
      {
        ticket.stops > 0
          ? plural(ticket.stops, '%d пересадка', '%d пересадки', '%d пересадок')
          : null
      }
    </div>

    <div className='b-route__to'>
      <div className='b-route__time'>{ticket.arrival_time}</div>
      <div className='b-route__location'>{ticket.destination}, {ticket.destination_name}</div>
      <div className='b-route__date'>{ticket.arrival_date}</div>
    </div>
  </div>
);
