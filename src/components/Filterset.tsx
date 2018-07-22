import Currency from '@/components/Currency';
import React from 'react';

export default () => (
  <div className='b-widget b-filterset'>
    <div className='b-filterset__group'>
      <div className='b-filterset__title'>Валюта</div>
      <Currency value='RUB'/>
    </div>
  </div>
);
