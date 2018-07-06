import * as React from 'react';
import { Background } from '../../../../colors';
import { Clickable } from '../../../../interaction';
import { Column } from '../../../../layout';
import { DefaultText } from '../../../../text';
import { DayData, MonthData } from '../../util/CalendarDataFactory';
import { CalendarDayProps, DayState } from '../Calendar';

export const CalendarDay = <T extends {}>({
  day,
  month,
  dayState,
  userData,
  onClickDay,
  theme,
}: CalendarDayProps<T>) => {
  return (
    <Background
      color={getBackgroundColor(
        dayState,
        day,
        month,
        theme.CalendarDay.backgroundColor,
        theme.CalendarDay.highlightedBackgroundColor,
        theme.CalendarDay.otherMonthBackgroundColor,
      )}
    >
      <Clickable
        onClick={onClickDay ? () => onClickDay(day, userData) : undefined}
      >
        <Column
          width={theme.width}
          height={theme.height}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <DefaultText
            color={
              day.month !== month.monthInYear
                ? theme.CalendarDay.otherMonthTextColor
                : theme.CalendarDay.textColor
            }
          >
            {day.dayOfMonth}
          </DefaultText>
        </Column>
      </Clickable>
    </Background>
  );
};

const getBackgroundColor = (
  dayState: DayState | undefined,
  day: DayData,
  month: MonthData,
  backgroundColor: string,
  highlightedBackgroundColor: string,
  otherMonthBackgroundColor: string,
): string => {
  if (dayState && dayState.highlighted) {
    return highlightedBackgroundColor;
  }
  if (day.month === month.monthInYear) {
    return backgroundColor;
  }
  return otherMonthBackgroundColor;
};
