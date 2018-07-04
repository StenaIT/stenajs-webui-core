import { ButtonTheme } from '../components/ui/buttons/ButtonTheme';
import { SimpleCheckboxTheme } from '../components/ui/form/checkbox/SimpleCheckboxTheme';
import { DefaultTextInputTheme } from '../components/ui/form/textinput/DefaultTextInputTheme';
import { SimpleTextInputTheme } from '../components/ui/form/textinput/SimpleTextInputTheme';
import { StandardButtonTheme } from '../components/ui/buttons/StandardButtonTheme';
import { SmallButtonTheme } from '../components/ui/buttons/SmallButtonTheme';
import { FlatButtonTheme } from '../components/ui/buttons/FlatButtonTheme';
import { TextTheme } from '../components/ui/text/TextTheme';

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
  errorBgLight: string;
  errorBgDark: string;
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
  FlatButton: FlatButtonTheme;
  SmallButton: SmallButtonTheme;
  StandardButton: StandardButtonTheme;
  SimpleCheckbox: SimpleCheckboxTheme;
  SimpleTextInput: SimpleTextInputTheme;
  HeaderText: TextTheme;
  LargeText: TextTheme;
  DefaultText: TextTheme;
  SmallText: TextTheme;
  SmallerText: TextTheme;
  TinyText: TextTheme;
  DefaultTextInput: DefaultTextInputTheme;
}
