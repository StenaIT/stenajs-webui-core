import styled from '@emotion/styled';
import { setDisplayName } from 'recompose';

export interface TextColorProps {
  color?: string;
}

export const TextColor = setDisplayName<TextColorProps>('TextColor')(
  styled('div')<TextColorProps>(({ color }) => ({
    color: color,
  })),
);
