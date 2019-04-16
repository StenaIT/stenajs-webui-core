import { create } from '@storybook/theming';
import { color, typography, background } from './base';

export const RawStenaTheme = {
  base: 'light',

  // Storybook-specific color palette
  colorPrimary: '#3284de', // coral
  colorSecondary: '#143e62', // ocean

  // UI
  appBg: background.app,
  appContentBg: color.lightest,
  appBorderColor: color.border,
  appBorderRadius: 4,

  // Fonts
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,

  // Text colors
  textColor: color.darkest,
  textInverseColor: color.lightest,

  // Toolbar default and active colors
  barTextColor: color.mediumdark,
  barSelectedColor: color.secondary,
  barBg: color.lightest,

  // Form colors
  inputBg: color.lightest,
  inputBorder: color.border,
  inputTextColor: color.darkest,
  inputBorderRadius: 4,
};

// @ts-ignore
export const StenaTheme = create(RawStenaTheme);
/*
 * base: 'light' | 'dark',
color: {
  primary
  secondary
  tertiary
  ancillary

  orange
  gold
  green
  seafoam
  purple
  ultraviolet

  lightest
  lighter
  light
  mediumlight
  medium
  mediumdark
  dark
  darker
  darkest

  border

  positive
  negative
  warning

  defaultText
  inverseText
}
background: {
  app
  content
  hoverable

  positive
  negative
  warning
}
typography: {
  fonts: {
    base
    mono
  }
  weight: {
    regular
    bold
    black
  }
  size: {
    s1
    s2
    s3
    m1
    m2
    m3
    l1
    l2
    l3
    code
  }
  input: {
    border
    background
    color
    borderRadius
  };

  layoutMargin
  appBorderColor
  appBorderRadius

  barTextColor
  barSelectedColor
  barBg

  brand
}
 */
