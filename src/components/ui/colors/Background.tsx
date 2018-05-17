import glamorous from 'glamorous';
import { GlamorousComponent } from 'glamorous';

export interface BackgroundProps {
  color?: string;
  hoverColor?: string;
  height?: string;
}

export const Background: GlamorousComponent<
  BackgroundProps,
  BackgroundProps
> = glamorous.div<BackgroundProps>(({ color, height, hoverColor }) => ({
  backgroundColor: color,
  height,
  ':hover': {
    backgroundColor: hoverColor,
  },
}));
