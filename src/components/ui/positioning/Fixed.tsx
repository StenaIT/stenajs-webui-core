import styled from '@emotion/styled';

export interface FixedProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

export const Fixed = styled('div')<
  FixedProps
>(({ top, right, bottom, left }) => ({
  display: 'flex',
  position: 'fixed',
  top,
  right,
  bottom,
  left,
}));
