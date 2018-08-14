import { CSSProperties } from 'react';
import styled, { StyledComponent } from 'react-emotion';

export interface BackgroundProps {
  color?: string;
  hoverColor?: string;
  height?: string;
  style?: CSSProperties;
}

export const Background: StyledComponent<BackgroundProps, {}, {}> = styled<
  BackgroundProps,
  'div'
>('div')(({ color, height, hoverColor }) => ({
  backgroundColor: color,
  height,
  ':hover': {
    backgroundColor: hoverColor,
  },
}));
