import Route from '@/components/Route';
import React from 'react';

export default () => (
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
      <Route/>
    </div>
  </div>
);
