import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type LargeTextProps = TextBaseSharedProps;

const LargeTextComponent = ({
  theme,
  ...textProps
}: LargeTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.LargeText.fontSize}
    fontFamily={theme.components.LargeText.fontFamily}
  />
);

export const LargeText = compose<
  LargeTextProps & WithThemeProps,
  LargeTextProps
>(
  pure,
  withTheme,
)(LargeTextComponent);
