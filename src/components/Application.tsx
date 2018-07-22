import Filterset from '@/components/Filterset';
import Ticket from '@/components/Ticket';
import Tickets from '@/components/Tickets';
import React from 'react';

export default () => (
  <div className='b-application'>
    <div className='b-application__header'>
      <div className='b-container'>
        <img
          className='b-application__logo'
          src='logo.svg'
          alt='Aviasales'
          width='82'
          height='88'
        />
      </div>
    </div>

    <div className='b-application__body'>
      <div className='b-container'>
        <div className='b-application__sidebar'>
          <Filterset/>
        </div>

        <div className='b-application__content'>
          <Tickets>
            <Ticket/>
            <Ticket/>
            <Ticket/>
          </Tickets>
        </div>
      </div>
    </div>
  </div>
);
