import Route from '@/components/Route';
import { INullStr, IState, ITicket } from '@/state/interfaces';
import React from 'react';
import { connect } from 'react-redux';

interface ITicketProps {
  ticket: ITicket;
  currency?: INullStr;
}

interface ICurrencies {
  [key: string]: {
    rate: number,
    chartCode: number,
  };
}

// Hardcoded currencies, these values are taken for an example
const CURRENCIES: ICurrencies = {
  RUB: { rate: 1, chartCode: 8381 },
  USD: { rate: 0.016, chartCode: 36 },
  EUR: { rate: 0.014, chartCode: 8364 },
};

const numberWithSpaces = (x: number | string) => {
  return Number(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const renderPrice = (price: number, currency?: INullStr) => {
  const { rate, chartCode } = CURRENCIES[currency || 'RUB'];
  const result = (price * rate).toFixed();

  return (
    <div className='b-ticket__price'>
      за {numberWithSpaces(result)} {String.fromCharCode(chartCode)}
    </div>
  );
};

const Ticket = ({ ticket, currency }: ITicketProps) => (
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
        {renderPrice(ticket.price, currency)}
      </button>
    </div>

    <div className='b-ticket__details'>
      <Route ticket={ticket}/>
    </div>
  </div>
);

const mapStateToProps = (state: IState) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(Ticket);
