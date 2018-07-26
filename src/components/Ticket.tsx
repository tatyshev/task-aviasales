import Route from '@/components/Route';
import { ITicket } from '@/state/interfaces';
import React from 'react';

interface ITicketProps {
  ticket: ITicket;
}

export default ({ ticket }: ITicketProps) => (
  <div className='b-widget b-ticket'>
    <div className='b-ticket__offer'>
      <img
        className='b-ticket__provider'
        src='//pics.avs.io/99/36/SU.png'
        srcSet='//pics.avs.io/99/36/SU@2x.png 2x'
      />

      <button className='b-ticket__button'>
        <div className='b-ticket__buy'>Купить</div>
        <div className='b-ticket__price'>за 19 999 &#8381;</div>
      </button>
    </div>

    <div className='b-ticket__details'>
      <Route ticket={ticket}/>
    </div>
  </div>
);
