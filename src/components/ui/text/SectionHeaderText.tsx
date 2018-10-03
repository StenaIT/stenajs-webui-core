import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { TextTheme } from './TextTheme';

export type SectionHeaderTextProps = TextBaseSharedProps &
  ComponentThemeProps<'SectionHeaderText'>;

type InnerProps = SectionHeaderTextProps & WithComponentThemeProps<TextTheme>;
const SectionHeaderTextComponent: React.SFC<InnerProps> = ({
  theme,
  ...textProps
}) => (
  <TextBase
    {...textProps}
    fontSize={theme.fontSize}
    fontFamily={theme.fontFamily}
  />
);

export const SectionHeaderText = setDisplayName<SectionHeaderTextProps>(
  'SectionHeaderText',
)(
  compose<InnerProps, SectionHeaderTextProps>(
    pure,
    withComponentTheme('SectionHeaderText'),
  )(SectionHeaderTextComponent),
);
