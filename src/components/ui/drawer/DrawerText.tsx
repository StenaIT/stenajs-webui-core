import * as React from 'react';

export interface IDrawerTextProps {
  title?: string;
  value?: string | number;
}
export const DrawerText: React.StatelessComponent<IDrawerTextProps> = ({
  title,
  value,
}) => (
  <span>
    {title}{' '}
    <strong
      style={{
        float: 'right',
        fontSize: '0.8em',
      }}
    >
      {value}
    </strong>
  </span>
);
