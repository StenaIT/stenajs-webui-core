import styled, { StyledComponent } from 'react-emotion';

export interface FixedProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

export const Fixed: StyledComponent<FixedProps, {}, {}> = styled('div')<
  FixedProps
>(({ top, right, bottom, left }) => ({
  display: 'flex',
  position: 'fixed',
  top,
  right,
  bottom,
  left,
}));
