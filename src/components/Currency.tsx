import cn from 'classnames';
import React, { ChangeEvent } from 'react';

interface IProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const VALUES = ['RUB', 'USD', 'EUR'];

const renderItem = (current: string, props: IProps) => {
  const isActive = current === props.value;

  return (
    <label className='b-currency__label' key={current}>
      <input
        className='b-currency__input'
        type='radio'
        name='currency'
        value={current}
        defaultChecked={isActive}
        onChange={props.onChange}
      />

      <button
        className={cn('b-currency__button', {
          'b-currency__button--active': isActive,
        })}
      >
        {current}
      </button>
    </label>
  );
};

export default (props: IProps) => (
  <div className='b-currency'>
    {VALUES.map((val) => renderItem(val, props))}
  </div>
);
