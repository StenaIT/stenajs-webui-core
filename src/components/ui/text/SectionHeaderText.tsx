import * as React from 'react';
import { TextBase, TextBaseSharedProps } from './TextBase';
import { compose, pure } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type SectionHeaderTextProps = TextBaseSharedProps;

const SectionHeaderTextComponent = ({
  theme,
  ...textProps
}: SectionHeaderTextProps & WithThemeProps) => (
  <TextBase
    {...textProps}
    fontSize={theme.components.SectionHeaderText.fontSize}
    fontFamily={theme.components.SectionHeaderText.fontFamily}
  />
);

export const SectionHeaderText = compose<
  SectionHeaderTextProps & WithThemeProps,
  SectionHeaderTextProps
>(pure, withTheme)(SectionHeaderTextComponent);
