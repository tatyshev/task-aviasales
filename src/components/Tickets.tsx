import React from 'react';

interface ITicketsProps {
  children?: JSX.Element[];
}

export default ({ children }: ITicketsProps) => (
  <div className='b-tickets'>
    {children}
  </div>
);
