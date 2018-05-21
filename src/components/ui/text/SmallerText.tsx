import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type SmallerTextProps = TextBaseSharedProps;

const SmallerTextComponent = ({
  theme,
  ...textProps
}: SmallerTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.SmallerText.fontSize}
    fontFamily={theme.components.SmallerText.fontFamily}
  />
);

export const SmallerText = compose<
  SmallerTextProps & WithThemeProps,
  SmallerTextProps
>(pure, withTheme)(SmallerTextComponent);
