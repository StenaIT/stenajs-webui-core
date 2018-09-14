import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

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

export const DefaultText = setDisplayName<DefaultTextProps>('DefaultText')(
  compose<DefaultTextProps & WithThemeProps, DefaultTextProps>(
    pure,
    withTheme,
  )(DefaultTextComponent),
);
