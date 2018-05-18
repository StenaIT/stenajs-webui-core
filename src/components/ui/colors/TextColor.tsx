import glamorous, { GlamorousComponent } from 'glamorous';

export interface TextColorProps {
  color?: string;
}

export const TextColor: GlamorousComponent<
  TextColorProps,
  TextColorProps
> = glamorous.div<TextColorProps>(({ color }) => ({
  color: color,
}));
