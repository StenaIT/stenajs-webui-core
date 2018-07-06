import * as React from 'react';
import { Background } from '../../../../colors';
import { Column } from '../../../../layout';
import { Absolute, Relative } from '../../../../positioning';
import { SmallText } from '../../../../text';
import { WeekData } from '../../util/CalendarDataFactory';
import { OnClickWeek } from '../Calendar';
import { CalendarTheme } from '../CalendarTheme';

export interface WeekNumberCellProps {
  week: WeekData;
  onClickWeek?: OnClickWeek;
  theme: CalendarTheme;
  background?: JSX.Element;
  prefix?: string;
  backgroundColor?: string;
}

export const WeekNumberCell = ({
  onClickWeek,
  theme,
  week,
  background,
  backgroundColor,
  prefix = 'w',
}: WeekNumberCellProps) => (
  <Background color={backgroundColor || theme.WeekNumber.backgroundColor}>
    <Relative>
      <div
        onClick={onClickWeek ? () => onClickWeek(week) : undefined}
        style={{ cursor: onClickWeek ? 'cursor' : undefined }}
      >
        <Column
          width={theme.width}
          height={theme.height}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {background && <Absolute>{background}</Absolute>}
          <Absolute>
            <SmallText color={theme.WeekNumber.textColor}>
              {prefix}
              {week.weekNumber}
            </SmallText>
          </Absolute>
        </Column>
      </div>
    </Relative>
  </Background>
);
