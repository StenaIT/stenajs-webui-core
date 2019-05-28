import {
  inputBorderFocused,
  primaryText,
  separator,
  white,
} from '../../../../themes/default-values/Colors';
import {
  CalendarTheme,
  defaultCalendarTheme,
} from '../calendar/components/CalendarTheme';

export interface DateInputTheme {
  backgroundColor: string;
  borderColor: string;
  calendar: CalendarTheme;
  iconColor: string;
  iconHighlightedColor: string;
}

export const defaultDateInputTheme: DateInputTheme = {
  backgroundColor: white,
  borderColor: separator,
  calendar: defaultCalendarTheme,
  iconColor: primaryText,
  iconHighlightedColor: inputBorderFocused,
};
