import * as React from 'react';
import styled from 'react-emotion';

export interface DrawerTextProps {
  title?: string;
  value?: string | number;
}

const DrawerValueText = styled('strong')`
  float: right;
  font-size: .8em;
`;

export const DrawerText: React.FC<DrawerTextProps> = ({
  title,
  value,
}) => (
  <span>
    {title}{' '}
    <DrawerValueText>
      {value}
    </DrawerValueText>
  </span>
);
