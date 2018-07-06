import { getMonth, getYear } from 'date-fns';
import * as _ from 'lodash';
import * as React from 'react';
import {
  branch,
  compose,
  InferableComponentEnhancerWithProps,
  mapProps,
  renderComponent,
  withProps,
} from 'recompose';
import { Row, Spacing } from '../../../layout';
import { DefaultText } from '../../../text';
import {
  calculateOverflowingMonth,
  DayData,
  getMonthInYear,
  getMonthsInYear,
  MonthData,
  WeekData,
} from '../util/CalendarDataFactory';
import { CalendarMonth, DataPerWeek } from './CalendarMonth';
import { CalendarTheme, defaultCalendarTheme } from './CalendarTheme';
import { CalendarDay } from './renderers/CalendarDay';

export type __C13581358 = InferableComponentEnhancerWithProps<{}, {}>;

export interface CalendarDayProps<T = {}> {
  month: MonthData;
  day: DayData;
  dayState?: DayState;
  userData?: T;
  onClickDay?: OnClickDay<T>;
  theme: CalendarTheme;
}

export interface CalendarOnClicks<T> {
  /** onClick for the week day names over the days in the month. */
  onClickWeekDay?: OnClickWeekDay;
  /** onClick for the week numbers to the left of the days in the month. */
  onClickWeek?: OnClickWeek;
  /** onClick for a day in the calendar */
  onClickDay?: OnClickDay<T>;
}

export type RenderWeekNumber = (
  week: WeekData,
  theme: CalendarTheme,
  onClick?: OnClickWeek,
) => JSX.Element;

export type RenderWeekDay = (
  weekDayName: string,
  theme: CalendarTheme,
  onClick?: OnClickWeekDay,
) => JSX.Element;

export interface Renderers {
  /** Render function for week number to the left of the days in the month. */
  renderWeekNumber?: RenderWeekNumber;
  /** Render function for week day names over the days in the month. */
  renderWeekDay?: RenderWeekDay;
}

export interface CalendarProps<T> extends CalendarOnClicks<T>, Renderers {
  /** The year to show. If used, must also provide month. Overrides prop date. */
  year?: number;
  /** The month to show. If used, must also provide year. Overrides prop date. */
  month?: number;
  /** The date to show. If used, do not use props year and month. */
  date?: Date;
  /** Number of months to display. The selected date will be the first month. */
  numMonths?: number;
  /** Split the months into rows. */
  monthsPerRow?: number;
  /** User data to pass down to renderers. */
  userDataPerMonth?: DataPerMonth<T>;
  /** Internal state to pass down to renderers. Do not use it, this is used by the framework. */
  statePerMonth?: DataPerMonth<DayState>;
  /**
   * The component to use to render a day in the calendar.
   * Must use CalendarDayProps. Use CalendarDay or create your own.
   */
  dayComponent: React.ComponentType<CalendarDayProps<T>>;
  /** The width of a cell in the calendar. Applies to days, week numbers, headers, etc. */
  width?: string;
  /** The height of a cell in the calendar. Applies to days, week numbers, headers, etc. */
  height?: string;

  /** The theme to use. */
  theme?: CalendarTheme;
}

export interface CalendarPropsWithDateSet<T> {
  year: number;
  month: number;
  numMonths?: number;
  monthsPerRow?: number;
  dayComponent: React.ComponentType<CalendarDayProps<T>>;
}

export type CalendarUserData<T> = DataPerMonth<T>;

interface InnerProps<T> extends CalendarOnClicks<T>, Renderers {
  year: number;
  month: number;
  monthRows: Array<Array<MonthData>>;
  userDataPerMonth?: CalendarUserData<T>;
  dayComponent?: React.ComponentType<CalendarDayProps<T>>;
  statePerMonth?: DataPerMonth<DayState>;
  width?: string;
  height?: string;
  theme?: CalendarTheme;
}

export interface DayState {
  highlighted?: boolean;
  error?: boolean;
  warning?: boolean;
}

export type OnClickDay<T> = (day: DayData, data?: T) => void;
export type OnClickWeekDay = (weekDay: number) => void;
export type OnClickWeek = (week: WeekData) => void;

export type DataPerMonth<T> = { [key: string]: DataPerWeek<T> };

const CalendarComponent = <T extends {}>({
  year,
  monthRows,
  dayComponent = CalendarDay,
  userDataPerMonth,
  statePerMonth,
  onClickDay,
  onClickWeekDay,
  onClickWeek,
  renderWeekDay,
  renderWeekNumber,
  theme = defaultCalendarTheme,
}: InnerProps<T>) => (
  <div>
    {monthRows.map((monthRow, rowIndex) => (
      <Spacing key={rowIndex}>
        <Row>
          {monthRow.map(month => (
            <CalendarMonth
              key={month.name}
              month={month}
              dayComponent={dayComponent}
              userDataPerWeek={
                userDataPerMonth && userDataPerMonth[month.monthString]
              }
              statePerWeek={statePerMonth && statePerMonth[month.monthString]}
              onClickDay={onClickDay}
              onClickWeekDay={onClickWeekDay}
              onClickWeek={onClickWeek}
              theme={theme}
              renderWeekNumber={renderWeekNumber}
              renderWeekDay={renderWeekDay}
            />
          ))}
        </Row>
      </Spacing>
    ))}
  </div>
);

export const applyDefaultDates = <T extends {}>() =>
  mapProps<CalendarPropsWithDateSet<T>, CalendarProps<T>>(props => {
    const { month, year, date } = props;
    if (month && year) {
      return {
        ...props,
        month,
        year,
      };
    }
    if (date) {
      return {
        ...props,
        month: getMonth(date),
        year: getYear(date),
      };
    }
    const now = new Date();
    return {
      ...props,
      month: getMonth(now),
      year: getYear(now),
    };
  });

const handleOverflowingMonth = <T extends {}>() =>
  withProps(({ month, year }: InnerProps<T>) =>
    calculateOverflowingMonth(year, month),
  );

const createCalendarMonths = <T extends {}>() =>
  withProps<Partial<InnerProps<T>>, CalendarPropsWithDateSet<T>>(
    ({ numMonths, monthsPerRow, year, month }) => {
      if (numMonths == null) {
        return {
          monthRows: [[getMonthInYear(year, month)]],
        };
      }
      if (monthsPerRow == null) {
        return {
          monthRows: [getMonthsInYear(year, month, numMonths)],
        };
      }
      return {
        monthRows: _.chunk(
          getMonthsInYear(year, month, numMonths),
          monthsPerRow,
        ),
      };
    },
  );

const renderErrorIfNoDayComponent = branch<CalendarProps<{}>>(
  ({ dayComponent }) => !dayComponent,
  renderComponent(() => <DefaultText>Missing dayComponent prop.</DefaultText>),
);

export const createCalendar = <T extends {}>() =>
  compose<InnerProps<T>, CalendarProps<T>>(
    renderErrorIfNoDayComponent,
    applyDefaultDates(),
    handleOverflowingMonth(),
    createCalendarMonths(),
  )(CalendarComponent);
