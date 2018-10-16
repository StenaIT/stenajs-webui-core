import * as React from 'react';
import { Column, Row, Space } from '../../../layout';
import { DefaultText } from '../../../text/DefaultText';
import { SectionHeaderText } from '../../../text/SectionHeaderText';
import { DayData, MonthData, WeekData } from '../util/CalendarDataFactory';
import {
  CalendarDayProps,
  CalendarOnClicks,
  DayState,
  DayStateHighlight,
  ExtraDayContentProps,
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
  headerLeftContent?: React.ReactElement<{}>;
  headerRightContent?: React.ReactElement<{}>;
  extraDayContent?: React.ComponentType<ExtraDayContentProps<T>>;
  defaultHighlights?: Array<DayStateHighlight>;
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
      headerLeftContent,
      headerRightContent,
      theme,
      extraDayContent,
      defaultHighlights,
    } = this.props;

    return (
      <>
        <Column alignItems={'center'}>
          <Row
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
          >
            <div>{headerLeftContent}</div>
            <SectionHeaderText color={theme.CalendarMonth.headerTextColor}>
              {month.name} {month.year}
            </SectionHeaderText>
            <div>{headerRightContent}</div>
          </Row>
          <Space />
          <table style={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td>
                  <Column
                    width={theme.width}
                    height={theme.height}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <DefaultText color={theme.WeekDay.textColor}>W</DefaultText>
                  </Column>
                </td>
                {month.weeks[0].days.map((day: DayData, index: number) => (
                  <td key={day.name}>
                    {renderWeekDay ? (
                      renderWeekDay(day.name, theme, onClickWeekDay)
                    ) : (
                      <WeekDayCell
                        day={day}
                        onClickWeekDay={onClickWeekDay}
                        theme={theme}
                      />
                    )}
                  </td>
                ))}
              </tr>
              {month.weeks.map((week: WeekData) => (
                <CalendarWeek
                  key={week.weekNumber}
                  month={month}
                  week={week}
                  dayComponent={dayComponent}
                  statePerWeekDay={
                    statePerWeek && statePerWeek[week.weekNumber]
                  }
                  userDataPerWeekDay={
                    userDataPerWeek && userDataPerWeek[week.weekNumber]
                  }
                  onClickDay={onClickDay}
                  onClickWeek={onClickWeek}
                  theme={theme}
                  renderWeekNumber={renderWeekNumber}
                  extraDayContent={extraDayContent}
                  defaultHighlights={defaultHighlights}
                />
              ))}
            </tbody>
          </table>
        </Column>
      </>
    );
  }
}
