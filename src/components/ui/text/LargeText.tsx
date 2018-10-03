import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { TextTheme } from './TextTheme';

export type LargeTextProps = TextBaseSharedProps &
  ComponentThemeProps<'LargeText'>;

type InnerProps = LargeTextProps & WithComponentThemeProps<TextTheme>;

const LargeTextComponent = ({ theme, ...textProps }: InnerProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.fontSize}
    fontFamily={theme.fontFamily}
  />
);

export const LargeText = setDisplayName<LargeTextProps>('LargeText')(
  compose<InnerProps, LargeTextProps>(
    pure,
    withComponentTheme('LargeText'),
  )(LargeTextComponent),
);
