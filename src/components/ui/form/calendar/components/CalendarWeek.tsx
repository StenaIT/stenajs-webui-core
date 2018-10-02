import * as React from 'react';
import { MonthData, WeekData } from '../util/CalendarDataFactory';
import {
  CalendarDayProps,
  DayState,
  ExtraDayContentProps,
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
  extraDayContent?: React.ComponentType<ExtraDayContentProps<T>>;
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
  extraDayContent,
}: CalendarWeekProps<T>) => (
  <tr key={week.weekNumber}>
    <td>
      {renderWeekNumber ? (
        renderWeekNumber(week, theme, onClickWeek)
      ) : (
        <WeekNumberCell week={week} onClickWeek={onClickWeek} theme={theme} />
      )}
    </td>
    {week.days.map(day => (
      <DayComponent
        key={day.dateString}
        day={day}
        week={week}
        month={month}
        dayState={statePerWeekDay && statePerWeekDay[day.dayOfMonth]}
        userData={userDataPerWeekDay && userDataPerWeekDay[day.dayOfMonth]}
        onClickDay={onClickDay}
        theme={theme}
        extraDayContent={extraDayContent}
      />
    ))}
  </tr>
);
