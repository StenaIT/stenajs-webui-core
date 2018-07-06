import { ThemeColors, ThemeFonts, ThemeFontSizes, ThemeMetrics } from './Theme';
import * as colors from './Colors';

export const defaultColors: ThemeColors = {
  ...colors,
};

export const defaultFonts: ThemeFonts = {
  primary: 'Open Sans',
  buttons: 'Open Sans',
  input: 'Open Sans',
};
export const defaultFontSizes: ThemeFontSizes = {
  huge: '22px',
  larger: '18px',
  large: '16px',
  normal: '14px',
  small: '12px',
  smaller: '11px',
  tiny: '9px',
};
export const defaultMetrics: ThemeMetrics = {
  indent: 10,
  spacing: 10,
  space: 10,
};
