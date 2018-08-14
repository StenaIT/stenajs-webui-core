import { ButtonTheme } from '../components/ui/buttons/ButtonTheme';
import { CalendarTheme } from '../components/ui/form/calendar/components/CalendarTheme';
import { SimpleCheckboxTheme } from '../components/ui/form/checkbox/SimpleCheckboxTheme';
import { DateInputTheme } from '../components/ui/form/date-time-input/DateInputTheme';
import { DateRangeInputTheme } from '../components/ui/form/date-time-input/DateRangeInputTheme';
import { DefaultTextInputTheme } from '../components/ui/form/text-input/DefaultTextInputTheme';
import { SimpleTextInputTheme } from '../components/ui/form/text-input/SimpleTextInputTheme';
import { StandardButtonTheme } from '../components/ui/buttons/StandardButtonTheme';
import { SmallButtonTheme } from '../components/ui/buttons/SmallButtonTheme';
import { FlatButtonTheme } from '../components/ui/buttons/FlatButtonTheme';
import { SliderTheme } from '../components/ui/slider/SliderTheme';
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
  separator: string;
  separatorHighlighted: string;
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
  SectionHeaderText: TextTheme;
  LargeText: TextTheme;
  DefaultText: TextTheme;
  SmallText: TextTheme;
  SmallerText: TextTheme;
  TinyText: TextTheme;
  DefaultTextInput: DefaultTextInputTheme;
  DateInput: DateInputTheme;
  DateRangeInput: DateRangeInputTheme;
  Calendar: CalendarTheme;
  Slider: SliderTheme;
}
