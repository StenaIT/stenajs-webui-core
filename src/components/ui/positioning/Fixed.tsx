import glamorous, { GlamorousComponent } from 'glamorous';

export interface FixedProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

export const Fixed: GlamorousComponent<FixedProps, FixedProps> = glamorous.div<
  FixedProps
>(({ top, right, bottom, left }) => ({
  display: 'flex',
  position: 'fixed',
  top,
  right,
  bottom,
  left,
}));
