import { ButtonTheme } from '../components/ui/buttons/ButtonTheme';

export interface Theme {
  colors: ThemeColors;
  metrics: ThemeMetrics;
  fonts: ThemeFonts;
  fontSizes: ThemeFontSizes;
  components: ComponentThemes;
}

export interface ThemeColors {
  primaryText: string;
  primaryTextLight: string;
  primaryBg: string;
  primaryBgLight: string;
  primaryBgDark: string;
  disabledText: string;
  disabledTextLight: string;
  white: string;
  successGreen: string;
  successGreenLight: string;
  errorText: string;
  errorTextLight: string;
  alertText: string;
  alertTextLight: string;
  infoBlue: string;
  infoBlueLight: string;
}

export interface ThemeMetrics {
  spacing: number;
  space: number;
  indent: number;
}

export interface ThemeFonts {
  primary: string;
  buttons: string;
  input: string;
}

export interface ThemeFontSizes {
  huge: string;
  larger: string;
  large: string;
  normal: string;
  small: string;
  smaller: string;
  tiny: string;
}

export interface ComponentThemes {
  Button: ButtonTheme;
}
