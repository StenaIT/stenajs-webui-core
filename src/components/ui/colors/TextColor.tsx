import styled, { StyledComponent } from 'react-emotion';

export interface TextColorProps {
  color?: string;
}

export const TextColor: StyledComponent<TextColorProps, {}, {}> = styled<
  TextColorProps,
  'div'
>('div')(({ color }) => ({
  color: color,
}));
