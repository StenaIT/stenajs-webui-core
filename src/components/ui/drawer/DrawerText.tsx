import * as React from 'react';

export interface DrawerTextProps {
  title?: string;
  value?: string | number;
}
export const DrawerText: React.StatelessComponent<DrawerTextProps> = ({
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
