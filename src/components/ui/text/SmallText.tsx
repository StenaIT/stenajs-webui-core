import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type SmallTextProps = TextBaseSharedProps;

const SmallTextComponent = ({
  theme,
  ...textProps
}: SmallTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.SmallText.fontSize}
    fontFamily={theme.components.SmallText.fontFamily}
  />
);

export const SmallText = compose<
  SmallTextProps & WithThemeProps,
  SmallTextProps
>(
  pure,
  withTheme,
)(SmallTextComponent);
