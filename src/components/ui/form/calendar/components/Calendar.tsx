import { getMonth, getYear } from 'date-fns';
import * as _ from 'lodash';
import * as React from 'react';
import {
  compose,
  InferableComponentEnhancerWithProps,
  mapProps,
  withProps,
} from 'recompose';
import { Row, Space, Spacing } from '../../../layout';
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

export interface CalendarDayProps<T = {}> extends ExtraDayContentProps<T> {
  extraDayContent?: React.ComponentType<ExtraDayContentProps<T>>;
  onClickDay?: OnClickDay<T>;
  defaultHighlights?: Array<DayStateHighlight>;
}

export interface ExtraDayContentProps<T = {}> {
  month: MonthData;
  week: WeekData;
  day: DayData;
  dayState?: DayState;
  userData?: T;
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

export interface CalendarProps<T>
  extends CalendarHeaderContentProps,
    CalendarOnClicks<T>,
    Renderers {
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
  /** User value to pass down to renderers. */
  userDataPerMonth?: DataPerMonth<T>;
  /** Internal state to pass down to renderers. Do not use it, this is used by the framework. */
  statePerMonth?: DataPerMonth<DayState>;
  /**
   * The component to use to render a day in the calendar.
   * Must use CalendarDayProps. Use CalendarDay or create your own.
   */
  dayComponent?: React.ComponentType<CalendarDayProps<T>>;
  /**
   * If supplied, this component will be rendered in the default day component inside a relative div.
   * This allows for added custom content in a day cell.
   */
  extraDayContent?: React.ComponentType<ExtraDayContentProps<T>>;
  /** The width of a cell in the calendar. Applies to days, week numbers, headers, etc. */
  width?: string;
  /** The height of a cell in the calendar. Applies to days, week numbers, headers, etc. */
  height?: string;

  /** Default highlights that will be applied to all days. */
  defaultHighlights?: Array<DayStateHighlight>;

  /** If true, today's date will be highlighted. */
  highlightToday?: boolean;

  /** The theme to use. */
  theme?: CalendarTheme;
}

export interface CalendarHeaderContentProps {
  /** Content to put left of the month header text. */
  headerLeftContent?: React.ReactElement<{}>;
  /** Content to put right of the month header text. */
  headerRightContent?: React.ReactElement<{}>;
}

export interface CalendarPropsWithDateSet<T> {
  year: number;
  month: number;
  numMonths?: number;
  monthsPerRow?: number;
  dayComponent?: React.ComponentType<CalendarDayProps<T>>;
}

export type CalendarUserData<T> = DataPerMonth<T>;

interface InnerProps<T>
  extends CalendarProps<T>,
    CalendarOnClicks<T>,
    Renderers {
  year: number;
  month: number;
  monthRows: Array<Array<MonthData>>;
  userDataPerMonth?: CalendarUserData<T>;
  statePerMonth?: DataPerMonth<DayState>;
  width?: string;
  height?: string;
  theme?: CalendarTheme;
}

export type DayStateHighlight =
  | 'selected'
  | 'range'
  | 'today'
  | 'error'
  | 'disabled'
  | string;

export interface DayState {
  highlights?: Array<DayStateHighlight>;
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
  headerLeftContent,
  headerRightContent,
  extraDayContent,
  defaultHighlights,
  theme = defaultCalendarTheme,
}: InnerProps<T>) => (
  <div>
    {monthRows.map((monthRow, rowIndex) => (
      <Spacing key={rowIndex}>
        <Row>
          {monthRow.map((month, index) => (
            <React.Fragment key={month.name}>
              {index > 0 && <Space />}
              <CalendarMonth
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
                headerLeftContent={headerLeftContent}
                headerRightContent={headerRightContent}
                extraDayContent={extraDayContent}
                defaultHighlights={defaultHighlights}
              />
            </React.Fragment>
          ))}
        </Row>
      </Spacing>
    ))}
  </div>
);

const applyDefaultDates = <T extends {}>() =>
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

export const createCalendar = <T extends {}>() =>
  compose<InnerProps<T>, CalendarProps<T>>(
    applyDefaultDates(),
    handleOverflowingMonth(),
    createCalendarMonths(),
  )(CalendarComponent);
