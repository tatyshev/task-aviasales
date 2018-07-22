import React, { ReactChildren } from 'react';

interface ITicketsProps {
  children?: JSX.Element | JSX.Element[];
}

export default ({ children }: ITicketsProps) => (
  <div className='b-tickets'>
    {children}
  </div>
);
