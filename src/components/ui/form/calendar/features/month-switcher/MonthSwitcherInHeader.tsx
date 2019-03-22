import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import * as React from 'react';
import { ComponentEnhancer, compose, withProps } from 'recompose';
import { addIcons } from '../../../../../icon-library/IconLibrary';
import { Button, defaultStandardButtonTheme } from '../../../../buttons';
import {
  CalendarHeaderContentProps,
  CalendarProps,
} from '../../types/CalendarTypes';
import {
  MonthSwitcherHandlerProps,
  MonthSwitcherStateProps,
  withMonthSwitcherLogic,
} from './MonthSwitcherLogic';

addIcons(faChevronLeft, faChevronRight);

export type __C3135136785123518 = ComponentEnhancer<{}, {}>;

type InnerProps = CalendarProps<{}> &
  MonthSwitcherStateProps &
  MonthSwitcherHandlerProps;

const withSwitchButtonsLeftRight = withProps<
  CalendarHeaderContentProps,
  InnerProps
>(({ prevMonth, nextMonth, theme }) => ({
  headerLeftContent: (
    <Button
      height={
        theme &&
        theme.CalendarMonth.SwitchButton &&
        theme.CalendarMonth.SwitchButton.height
          ? theme.CalendarMonth.SwitchButton.height
          : defaultStandardButtonTheme.height
      }
      onClick={prevMonth}
      leftIcon={'chevron-left'}
      theme={
        theme && theme.CalendarMonth.SwitchButton
          ? theme.CalendarMonth.SwitchButton
          : undefined
      }
      width={
        theme && theme.CalendarMonth.SwitchButton
          ? theme.CalendarMonth.SwitchButton.width
          : undefined
      }
    />
  ),
  headerRightContent: (
    <Button
      height={
        theme &&
        theme.CalendarMonth.SwitchButton &&
        theme.CalendarMonth.SwitchButton.height
          ? theme.CalendarMonth.SwitchButton.height
          : defaultStandardButtonTheme.height
      }
      onClick={nextMonth}
      leftIcon={'chevron-right'}
      theme={
        theme && theme.CalendarMonth.SwitchButton
          ? theme.CalendarMonth.SwitchButton
          : undefined
      }
      width={
        theme && theme.CalendarMonth.SwitchButton
          ? theme.CalendarMonth.SwitchButton.width
          : undefined
      }
    />
  ),
}));

export const withMonthSwitcherInHeader = compose(
  withMonthSwitcherLogic,
  withSwitchButtonsLeftRight,
);
