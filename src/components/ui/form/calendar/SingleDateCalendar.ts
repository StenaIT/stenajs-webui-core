import { ComponentClass } from 'react';
import { compose, withProps } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers';
import { CalendarProps, createCalendar } from './components/Calendar';
import { withMonthSwitcher } from './features/MonthSwitcher';
import {
  SingleDateCalendarProps,
  withSingleDateSelection,
} from './features/SingleDateSelection';

export type __C124124131 = ComponentClass<{}>;

export const createSingleDateCalendar = <T extends {}>() =>
  compose<CalendarProps<T>, SingleDateCalendarProps<T>>(
    withSingleDateSelection,
    withMonthSwitcher,
    withTheme,
    withProps(({ theme }: WithThemeProps) => ({
      theme: theme.components.Calendar,
    })),
  )(createCalendar<T>());

export const SingleDateCalendar = createSingleDateCalendar();

SingleDateCalendar.displayName = 'SingleDateCalendar';
