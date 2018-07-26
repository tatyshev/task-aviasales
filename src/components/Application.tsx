import Filterset from '@/components/Filterset';
import Tickets from '@/components/Tickets';
import state from '@/state';
import { setTickets } from '@/state/actions';
import { ITicket } from '@/state/interfaces';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

const TICKETS_URL = 'https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json';

class Application extends Component<{}, {}> {
  componentWillMount() {
    this.fetchTickets().then((tickets) => {
      state.dispatch(setTickets(tickets));
    });
  }

  fetchTickets(): Promise<ITicket[]> {
    return fetch(TICKETS_URL)
      .then((x) => x.json())
      .then((x) => x && x.tickets);
  }

  render() {
    return (
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
              <Tickets/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <Provider store={state}>
    <Application/>
  </Provider>
);
