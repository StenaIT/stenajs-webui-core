import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type TinyTextProps = TextBaseSharedProps;

const TinyTextComponent = ({
  theme,
  ...textProps
}: TinyTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.TinyText.fontSize}
    fontFamily={theme.components.TinyText.fontFamily}
  />
);

export const TinyText = compose<TinyTextProps & WithThemeProps, TinyTextProps>(
  pure,
  withTheme,
)(TinyTextComponent);
