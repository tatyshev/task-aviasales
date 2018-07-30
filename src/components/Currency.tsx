import { setCurrency } from '@/state/actions';
import { IState } from '@/state/interfaces';
import cn from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface ICurrencyProps {
  value?: string;
  onChange?: (value: string) => void;
}

const VALUES = ['RUB', 'USD', 'EUR'];

const renderItem = (current: string, props: ICurrencyProps) => {
  const isActive = current === props.value;
  const handleChange = () => props.onChange && props.onChange(current);

  return (
    <div className='b-currency__label' key={current}>
      <button
        className={cn('b-currency__button', {
          'b-currency__button--active': isActive,
        })}

        onClick={handleChange}
      >
        {current}
      </button>
    </div>
  );
};

const Currency = (props: ICurrencyProps) => (
  <div className='b-currency'>
    {VALUES.map((val) => renderItem(val, props))}
  </div>
);

const mapStateToProps = (state: IState) => ({
  value: state.currency,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: (value: string) => {
    dispatch(setCurrency(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
