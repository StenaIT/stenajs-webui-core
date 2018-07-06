import * as React from 'react';
import { Row } from '../../../layout';
import { MonthData, WeekData } from '../util/CalendarDataFactory';
import {
  CalendarDayProps,
  DayState,
  OnClickDay,
  OnClickWeek,
  RenderWeekNumber,
} from './Calendar';
import { CalendarTheme } from './CalendarTheme';
import { WeekNumberCell } from './renderers/WeekNumberCell';

export type DataPerWeekDay<T> = { [key: number]: T };

export interface CalendarWeekProps<T> {
  dayComponent: React.ComponentType<CalendarDayProps<T>>;
  week: WeekData;
  month: MonthData;
  statePerWeekDay?: DataPerWeekDay<DayState>;
  userDataPerWeekDay?: DataPerWeekDay<T>;
  onClickWeek?: OnClickWeek;
  onClickDay?: OnClickDay<T>;
  theme: CalendarTheme;
  renderWeekNumber?: RenderWeekNumber;
}

export const CalendarWeek = <T extends {}>({
  week,
  month,
  dayComponent: DayComponent,
  statePerWeekDay,
  userDataPerWeekDay,
  onClickWeek,
  onClickDay,
  theme,
  renderWeekNumber,
}: CalendarWeekProps<T>) => (
  <Row key={week.weekNumber}>
    <div>
      {renderWeekNumber ? (
        renderWeekNumber(week, theme, onClickWeek)
      ) : (
        <WeekNumberCell week={week} onClickWeek={onClickWeek} theme={theme} />
      )}
    </div>
    {week.days.map(day => (
      <DayComponent
        key={day.dateString}
        day={day}
        month={month}
        dayState={statePerWeekDay && statePerWeekDay[day.dayOfMonth]}
        userData={userDataPerWeekDay && userDataPerWeekDay[day.dayOfMonth]}
        onClickDay={onClickDay}
        theme={theme}
      />
    ))}
  </Row>
);
