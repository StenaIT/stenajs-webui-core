import { addMonths, subMonths } from 'date-fns';
import { ComponentEnhancer, compose, withHandlers, withState } from 'recompose';
import { CalendarProps } from '../../components/Calendar';

export type __C31235123518 = ComponentEnhancer<{}, {}>;

export interface MonthSwitcherLogicOuterProps {
  /**
   * The date which is in focus when opening the calendar.
   * @default Today's date.
   */
  startDateInFocus?: Date;
}

export interface MonthSwitcherStateProps {
  date: Date;
  setDate: (date: Date) => void;
}

export interface MonthSwitcherHandlerProps {
  nextMonth: () => void;
  prevMonth: () => void;
}

const withClickHandlers = withHandlers<
  MonthSwitcherStateProps & CalendarProps<{}>,
  MonthSwitcherHandlerProps
>({
  nextMonth: ({ setDate, date, monthsPerRow }) => () => {
    setDate(addMonths(date, monthsPerRow || 1));
  },
  prevMonth: ({ setDate, date, monthsPerRow }) => () => {
    setDate(subMonths(date, monthsPerRow || 1));
  },
});

const withDateInFocusState = withState(
  'date',
  'setDate',
  ({ startDateInFocus }: MonthSwitcherLogicOuterProps) =>
    startDateInFocus || new Date(),
);

export const withMonthSwitcherLogic = compose(
  withDateInFocusState,
  withClickHandlers,
);
