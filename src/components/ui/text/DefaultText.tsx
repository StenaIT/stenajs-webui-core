import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type DefaultTextProps = TextBaseSharedProps;

const DefaultTextComponent = ({
  theme,
  ...textProps
}: DefaultTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.DefaultText.fontSize}
    fontFamily={theme.components.DefaultText.fontFamily}
  />
);

export const DefaultText = compose<
  DefaultTextProps & WithThemeProps,
  DefaultTextProps
>(pure, withTheme)(DefaultTextComponent);
