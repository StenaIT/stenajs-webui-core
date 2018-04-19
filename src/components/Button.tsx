import * as React from 'react';

export interface IButtonProps {
  children: any;
  onClick: any;
}

export const Button = ({ children, onClick }: IButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
