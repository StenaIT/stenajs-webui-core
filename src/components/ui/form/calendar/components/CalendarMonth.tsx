import * as React from 'react';
import { Column, Row, Space } from '../../../layout';
import { SectionHeaderText } from '../../../text/SectionHeaderText';
import { DayData, MonthData, WeekData } from '../util/CalendarDataFactory';
import {
  CalendarDayProps,
  CalendarOnClicks,
  DayState,
  Renderers,
} from './Calendar';
import { CalendarTheme } from './CalendarTheme';
import { CalendarWeek, DataPerWeekDay } from './CalendarWeek';
import { WeekDayCell } from './renderers/WeekDayCell';

export type DataPerWeek<T> = { [key: number]: DataPerWeekDay<T> };

export interface CalendarMonthProps<T> extends CalendarOnClicks<T>, Renderers {
  month: MonthData;
  dayComponent: React.ComponentType<CalendarDayProps<T>>;
  userDataPerWeek?: DataPerWeek<T>;
  statePerWeek?: DataPerWeek<DayState>;
  theme: CalendarTheme;
}

export class CalendarMonth<T> extends React.Component<CalendarMonthProps<T>> {
  render() {
    const {
      month,
      dayComponent,
      statePerWeek,
      userDataPerWeek,
      onClickDay,
      onClickWeek,
      onClickWeekDay,
      renderWeekNumber,
      renderWeekDay,
      theme,
    } = this.props;

    return (
      <>
        <Column alignItems={'center'}>
          <SectionHeaderText color={theme.CalendarMonth.headerTextColor}>
            {month.name} {month.year}
          </SectionHeaderText>
          <Space />
          <Row>
            <Column
              width={theme.width}
              height={theme.height}
              justifyContent={'center'}
              alignItems={'center'}
            />
            {month.weeks[0].days.map((day: DayData, index: number) => (
              <div key={day.name}>
                {renderWeekDay ? (
                  renderWeekDay(day.name, theme, onClickWeekDay)
                ) : (
                  <WeekDayCell
                    day={day}
                    onClickWeekDay={onClickWeekDay}
                    theme={theme}
                  />
                )}
              </div>
            ))}
          </Row>
          {month.weeks.map((week: WeekData) => (
            <CalendarWeek
              key={week.weekNumber}
              month={month}
              week={week}
              dayComponent={dayComponent}
              statePerWeekDay={statePerWeek && statePerWeek[week.weekNumber]}
              userDataPerWeekDay={
                userDataPerWeek && userDataPerWeek[week.weekNumber]
              }
              onClickDay={onClickDay}
              onClickWeek={onClickWeek}
              theme={theme}
              renderWeekNumber={renderWeekNumber}
            />
          ))}
        </Column>
        <Space />
      </>
    );
  }
}

const tinyMarginStyle = {
  margin: '1px',
};

export const TinyMargin = ({ children }: { children: {} }) => (
  <div style={tinyMarginStyle}>{children}</div>
);
