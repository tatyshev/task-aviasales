import noop from 'lodash.noop';
import React from 'react';

interface IProps {
  value?: number[];
  onChange?: () => void;
}

export default ({ value, onChange = noop }: IProps) => (
  <div className='b-transfers'>
    <div className='b-transfers__item'>
      <div className='b-transfers__label'>Все</div>
    </div>

    <div className='b-transfers__item'>
      <div className='b-transfers__label'>1 Пересадка</div>
    </div>

    <div className='b-transfers__item'>
      <div className='b-transfers__label'>2 Пересадка</div>
    </div>
  </div>
);
