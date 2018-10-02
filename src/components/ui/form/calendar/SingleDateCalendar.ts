import { ComponentClass } from 'react';
import { compose, setDisplayName } from 'recompose';
import { withComponentTheme } from '../../../util/enhancers/WithComponentTheme';
import { CalendarProps, createCalendar } from './components/Calendar';
import { withMonthSwitcher } from './features/month-switcher/MonthSwitcher';
import {
  SingleDateCalendarProps,
  withSingleDateSelection,
} from './features/SingleDateSelection';
import { withTodayInDayState } from './features/today-state/WithTodayInDayState';

export type __C124124131 = ComponentClass<{}>;

export const createSingleDateCalendar = <T extends {}>() =>
  setDisplayName<SingleDateCalendarProps<T>>('SingleDateCalendar')(
    compose<CalendarProps<T>, SingleDateCalendarProps<T>>(
      withSingleDateSelection,
      withMonthSwitcher,
      withComponentTheme('Calendar'),
      withTodayInDayState<T>(),
    )(createCalendar<T>()),
  );

export const SingleDateCalendar = createSingleDateCalendar();
