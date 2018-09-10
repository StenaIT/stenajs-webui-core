import {
  disabledText,
  successGreenLight,
  white,
} from '../../../../../themes/default-values/Colors';

export interface CalendarTheme {
  width: string;
  height: string;
  WeekNumber: WeekNumberTheme;
  WeekDay: WeekDayTheme;
  CalendarDay: CalendarDayTheme;
  CalendarMonth: CalendarMonthTheme;
}

export interface WeekNumberTheme {
  backgroundColor: string;
  textColor?: string;
}

export interface CalendarMonthTheme {
  headerTextColor?: string;
}

export interface WeekDayTheme {
  textColor?: string;
}

export interface CalendarDayTheme {
  textColor?: string;
  backgroundColor: string;
  highlightedBackgroundColor: string;
  otherMonthBackgroundColor: string;
  otherMonthTextColor: string;
}

export const defaultCalendarTheme: CalendarTheme = {
  width: '50px',
  height: '50px',
  WeekNumber: {
    backgroundColor: '#F9F7F4',
  },
  WeekDay: {},
  CalendarDay: {
    textColor: undefined,
    backgroundColor: white,
    highlightedBackgroundColor: successGreenLight,
    otherMonthBackgroundColor: 'transparent',
    otherMonthTextColor: disabledText,
  },
  CalendarMonth: {},
};
