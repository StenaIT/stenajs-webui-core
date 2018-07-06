import { ComponentClass } from 'react';
import { compose, withProps } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers';
import { CalendarProps, createCalendar } from './components/Calendar';
import {
  DateRangeCalendarProps,
  DateRangeCalendarPropsWithStateProps,
  withDateRangeSelection,
  withDateRangeSelectionState,
} from './features/DateRangeSelection';
import { withMonthSwitcher } from './features/MonthSwitcher';

export type __C1241241 = ComponentClass<{}>;

export const createDateRangeCalendar = <T extends {}>() =>
  compose<CalendarProps<T>, DateRangeCalendarProps<T>>(
    withDateRangeSelection,
    withMonthSwitcher,
    withTheme,
    withProps(({ theme }: WithThemeProps) => ({
      theme: theme.components.Calendar,
    })),
  )(createCalendar<T>());

export const createDateRangeCalendarWithState = <T extends {}>() =>
  compose<CalendarProps<T>, DateRangeCalendarPropsWithStateProps<T>>(
    withDateRangeSelectionState,
    withDateRangeSelection,
    withMonthSwitcher,
    withTheme,
    withProps(({ theme }: WithThemeProps) => ({
      theme: theme.components.Calendar,
    })),
  )(createCalendar<T>());

export const DateRangeCalendar = createDateRangeCalendar();
DateRangeCalendar.displayName = 'DateRangeCalendar';

export const DateRangeCalendarWithState = createDateRangeCalendarWithState();
DateRangeCalendarWithState.displayName = 'DateRangeCalendarWithState';
