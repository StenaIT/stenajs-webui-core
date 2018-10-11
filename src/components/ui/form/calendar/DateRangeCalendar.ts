import { ComponentClass } from 'react';
import { compose, setDisplayName } from 'recompose';
import { withComponentTheme } from '../../../util/enhancers/WithComponentTheme';
import { CalendarProps, createCalendar } from './components/Calendar';
import {
  DateRangeCalendarProps,
  DateRangeCalendarPropsWithStateProps,
  withDateRangeSelection,
  withDateRangeSelectionState,
} from './features/DateRangeSelection';
import { withMonthSwitcher } from './features/month-switcher/MonthSwitcher';
import { withTodayInDayState } from './features/today-state/WithTodayInDayState';

export type __C1241241 = ComponentClass<{}>;

export const createDateRangeCalendar = <T extends {}>() =>
  setDisplayName<DateRangeCalendarProps<T>>('DateRangeCalendar')(
    compose<CalendarProps<T>, DateRangeCalendarProps<T>>(
      withDateRangeSelection,
      withMonthSwitcher,
      withComponentTheme('Calendar'),
      withTodayInDayState<T>(),
    )(createCalendar<T>()),
  );

export const createDateRangeCalendarWithState = <T extends {}>() =>
  setDisplayName<DateRangeCalendarPropsWithStateProps<T>>(
    'DateRangeCalendarWithState',
  )(
    compose<CalendarProps<T>, DateRangeCalendarPropsWithStateProps<T>>(
      withDateRangeSelectionState,
      withDateRangeSelection,
      withMonthSwitcher,
      withComponentTheme('Calendar'),
      withTodayInDayState<T>(),
    )(createCalendar<T>()),
  );

export const DateRangeCalendar = createDateRangeCalendar();
export const DateRangeCalendarWithState = createDateRangeCalendarWithState();
