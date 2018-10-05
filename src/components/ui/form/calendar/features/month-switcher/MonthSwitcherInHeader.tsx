import * as React from 'react';
import { ComponentEnhancer, compose, withProps } from 'recompose';
import { StandardButton } from '../../../../buttons/StandardButton';
import {
  CalendarHeaderContentProps,
  CalendarProps,
} from '../../components/Calendar';
import {
  MonthSwitcherHandlerProps,
  MonthSwitcherStateProps,
  withMonthSwitcherLogic,
} from './MonthSwitcherLogic';

export type __C3135136785123518 = ComponentEnhancer<{}, {}>;

type InnerProps = CalendarProps<{}> &
  MonthSwitcherStateProps &
  MonthSwitcherHandlerProps;

const withSwitchButtonsLeftRight = withProps<
  CalendarHeaderContentProps,
  InnerProps
>(({ prevMonth, nextMonth }) => ({
  headerLeftContent: (
    <StandardButton onClick={prevMonth} leftIcon={'chevron-left'} />
  ),
  headerRightContent: (
    <StandardButton onClick={nextMonth} leftIcon={'chevron-right'} />
  ),
}));
export const withMonthSwitcherInHeader = compose(
  withMonthSwitcherLogic,
  withSwitchButtonsLeftRight,
);