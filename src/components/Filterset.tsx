import Currency from '@/components/Currency';
import Transfers from '@/components/Transfers';
import React from 'react';

export default () => (
  <div className='b-widget b-filterset'>
    <div className='b-filterset__group'>
      <div className='b-filterset__title'>Валюта</div>
      <Currency/>
    </div>

    <div className='b-filterset__group'>
      <div className='b-filterset__title'>Количество пересадок</div>
      <Transfers/>
    </div>
  </div>
);
