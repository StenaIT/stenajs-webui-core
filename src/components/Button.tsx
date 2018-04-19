import * as React from 'react';

export interface ButtonProps {
  children: any;
  onClick: any;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
