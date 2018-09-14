import styled, { StyledComponent } from 'react-emotion';
import { setDisplayName } from 'recompose';

export interface TextColorProps {
  color?: string;
}

export const TextColor = setDisplayName<TextColorProps>('TextColor')(
  styled('div')<TextColorProps>(({ color }) => ({
    color: color,
  })),
) as StyledComponent<TextColorProps, {}, {}>;
