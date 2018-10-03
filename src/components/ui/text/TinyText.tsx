import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { TextTheme } from './TextTheme';

export type TinyTextProps = TextBaseSharedProps &
  ComponentThemeProps<'TinyText'>;

type InnerProps = TinyTextProps & WithComponentThemeProps<TextTheme>;
const TinyTextComponent: React.SFC<InnerProps> = ({ theme, ...textProps }) => (
  <TextBase
    {...textProps}
    fontSize={theme.fontSize}
    fontFamily={theme.fontFamily}
  />
);

export const TinyText = setDisplayName<TinyTextProps>('TinyText')(
  compose<InnerProps, TinyTextProps>(
    pure,
    withComponentTheme('TinyText'),
  )(TinyTextComponent),
);
