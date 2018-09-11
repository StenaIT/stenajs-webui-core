import * as React from 'react';
import { CSSProperties } from 'react';
import styled from 'react-emotion';

export const __C_BACKGROUND = <div />;

export interface BackgroundProps {
  color?: string;
  hoverColor?: string;
  height?: string;
  style?: CSSProperties;
}

export const Background = styled('div')<BackgroundProps>(
  ({ color, height, hoverColor }) => ({
    backgroundColor: color,
    height,
    ':hover': {
      backgroundColor: hoverColor,
    },
  }),
);
