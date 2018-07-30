import { setTransfers } from '@/state/actions';
import { IState } from '@/state/interfaces';
import cn from 'classnames';
import noop from 'lodash.noop';
import uniq from 'lodash.uniq';
import plural from 'plural-ru';
import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface ITRansferProps {
  value?: number[];
  onChange?: (value: number[]) => void;
}

interface ITransfersItemProps {
  target: string | number;
  active?: boolean;
  only?: boolean;
  onSelect?: (event: SyntheticEvent<HTMLDivElement>) => void;
  onSelectOnly?: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

const TRANSFERS = [0, 1, 2, 3];

const ACTIVE_ITEM = 'b-transfers__item--active';

const TransfersItem = ({ active, target, only, onSelect, onSelectOnly }: ITransfersItemProps) => {
  const handleSelectOnly = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onSelectOnly) { onSelectOnly(event); }
  };

  return (
    <div
      className={cn('b-transfers__item', { [ACTIVE_ITEM]: active })}
      onClick={onSelect}
    >
      <div className='b-transfers__label'>
        {
          typeof target === 'number'
            ? target === 0
              ? 'Без пересадок'
              : plural(target, '%d пересадка', '%d пересадки', '%d пересадок')
            : target
        }
      </div>

      {
        only !== false && (
          <button className='b-transfers__only' onClick={(handleSelectOnly)}>
            Только
          </button>
        )
      }
    </div>
  );
};

class Transfers extends Component<ITRansferProps> {
  render() {
    const { select, selectOnly } = this;

    return (
      <div className='b-transfers'>
        <TransfersItem
          target='Все'
          only={false}
          active={this.isAllSelected()}
          onSelect={this.selectAll}
        />

        {
          TRANSFERS.map((i) => (
            <TransfersItem
              key={i}
              target={i}
              active={this.isSelected(i)}
              onSelect={select.bind(this, i)}
              onSelectOnly={selectOnly.bind(this, i)}
            />
          ))
        }
      </div>
    );
  }

  private isAllSelected = () => {
    return TRANSFERS.every((i) => this.isSelected(i));
  }

  private isSelected = (current: number): boolean => {
    const value = this.props.value || [];
    return value.indexOf(current) !== -1;
  }

  private selectAll = () => {
    const onChange = this.props.onChange || noop;

    if (this.isAllSelected()) {
      onChange([]);
    } else {
      onChange(TRANSFERS);
    }
  }

  private select = (t: number) => {
    const value = this.props.value || [];
    const onChange = this.props.onChange || noop;

    if (this.isSelected(t)) {
      onChange(value.filter((x) => x !== t));
    } else {
      onChange(uniq([t, ...value]));
    }
  }

  private selectOnly = (t: number) => {
    const onChange = this.props.onChange || noop;
    onChange([t]);
  }
}

const mapStateToProps = (state: IState) => ({
  value: state.transfers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: (value: number[]) => {
    dispatch(setTransfers(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
