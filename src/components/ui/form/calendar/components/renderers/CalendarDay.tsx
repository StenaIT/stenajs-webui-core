import * as React from 'react';
import { Clickable } from '../../../../interaction';
import { Column } from '../../../../layout';
import { DefaultText } from '../../../../text';
import { dayHighlightSelect } from '../../util/StateHelper';
import { CalendarDayProps, DayState, DayStateHighlight } from '../Calendar';

export const CalendarDay = <T extends {}>({
  day,
  week,
  month,
  dayState,
  userData,
  onClickDay,
  theme,
  extraDayContent: ExtraDayContent,
  defaultHighlights,
}: CalendarDayProps<T>) => {
  return (
    <td
      style={{
        ...(theme.CalendarDay.wrapperStyle &&
          theme.CalendarDay.wrapperStyle(
            defaultHighlights,
            dayState,
            day,
            week,
            month,
            userData,
          )),
        width: theme.width,
        height: theme.height,
      }}
    >
      <div
        style={{
          ...(theme.CalendarDay.innerWrapperStyle &&
            theme.CalendarDay.innerWrapperStyle(
              defaultHighlights,
              dayState,
              day,
              week,
              month,
              userData,
            )),
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            ...(theme.CalendarDay.cellWrapperStyle &&
              theme.CalendarDay.cellWrapperStyle(
                defaultHighlights,
                dayState,
                day,
                week,
                month,
                userData,
              )),
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {ExtraDayContent && (
            <ExtraDayContent
              week={week}
              month={month}
              day={day}
              dayState={dayState}
              theme={theme}
              userData={userData}
            />
          )}
          <Clickable
            onClick={
              onClickDay &&
              day.month === month.monthInYear &&
              isClickable(defaultHighlights, dayState)
                ? () => onClickDay(day, userData)
                : undefined
            }
            style={{ width: '100%', height: '100%' }}
          >
            <Column
              width={'100%'}
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <DefaultText
                {...theme.CalendarDay.textProps &&
                  theme.CalendarDay.textProps(
                    defaultHighlights,
                    dayState,
                    day,
                    week,
                    month,
                    userData,
                  )}
              >
                {day.dayOfMonth}
              </DefaultText>
            </Column>
          </Clickable>
        </div>
      </div>
    </td>
  );
};

const isClickable = (
  defaultHighlights: Array<DayStateHighlight> | undefined,
  dayState: DayState | undefined,
): boolean =>
  !!dayHighlightSelect<boolean>(
    dayState,
    defaultHighlights,
    ['enabled', 'disabled'],
    [true, false],
    true,
  );
