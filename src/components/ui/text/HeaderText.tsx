import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type HeaderTextProps = TextBaseSharedProps;

const HeaderTextComponent = ({
  theme,
  ...textProps
}: HeaderTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.HeaderText.fontSize}
    fontFamily={theme.components.HeaderText.fontFamily}
  />
);

export const HeaderText = compose<
  HeaderTextProps & WithThemeProps,
  HeaderTextProps
>(
  pure,
  withTheme,
)(HeaderTextComponent);
