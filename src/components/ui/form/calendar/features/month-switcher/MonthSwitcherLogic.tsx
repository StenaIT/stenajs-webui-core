import {
  ComponentEnhancer,
  compose,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import { applyDefaultDates, CalendarProps } from '../../components/Calendar';

export type __C31235123518 = ComponentEnhancer<{}, {}>;

export interface MonthSwitcherStateProps {
  startMonth: number;
  setStartMonth: (startMonth: number) => void;
}

export interface MonthSwitcherHandlerProps {
  nextMonth: () => void;
  prevMonth: () => void;
}

const withClickHandlers = withHandlers<
  MonthSwitcherStateProps & CalendarProps<{}>,
  MonthSwitcherHandlerProps
>({
  nextMonth: ({ setStartMonth, startMonth, monthsPerRow }) => () => {
    setStartMonth(startMonth + (monthsPerRow || 1));
  },
  prevMonth: ({ setStartMonth, startMonth, monthsPerRow }) => () => {
    setStartMonth(startMonth - (monthsPerRow || 1));
  },
});

const withSelectedMonthState = withState(
  'startMonth',
  'setStartMonth',
  ({ month }) => month,
);

const withMonthProp = withProps(({ startMonth }: MonthSwitcherStateProps) => ({
  month: startMonth,
}));

export const withMonthSwitcherLogic = compose(
  applyDefaultDates(),
  withSelectedMonthState,
  withClickHandlers,
  withMonthProp,
);
