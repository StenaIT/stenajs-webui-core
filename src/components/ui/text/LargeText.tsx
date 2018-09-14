import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

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

export const LargeText = setDisplayName<LargeTextProps>('LargeText')(
  compose<LargeTextProps & WithThemeProps, LargeTextProps>(
    pure,
    withTheme,
  )(LargeTextComponent),
);
