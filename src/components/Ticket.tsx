import Route from '@/components/Route';
import { ITicket } from '@/state/interfaces';
import React from 'react';

interface ITicketProps {
  ticket: ITicket;
}

const numberWithSpaces = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default ({ ticket }: ITicketProps) => (
  <div className='b-widget b-ticket'>
    <div className='b-ticket__offer'>
      <img
        alt={ticket.carrier}
        className='b-ticket__provider'
        src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
        srcSet={`//pics.avs.io/99/36/${ticket.carrier}@2x.png 2x`}
        width='99'
        height='36'
      />

      <button className='b-ticket__button'>
        <div className='b-ticket__buy'>Купить</div>
        <div className='b-ticket__price'>за {numberWithSpaces(ticket.price)} &#8381;</div>
      </button>
    </div>

    <div className='b-ticket__details'>
      <Route ticket={ticket}/>
    </div>
  </div>
);
