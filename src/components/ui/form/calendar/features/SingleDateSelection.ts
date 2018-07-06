import {
  ComponentEnhancer,
  compose,
  pure,
  withHandlers,
  withProps,
} from 'recompose';
import { CalendarProps } from '../components/Calendar';
import { DayData } from '../util/CalendarDataFactory';
import { setDayStateValue } from '../util/StateModifier';

export type __C359812313518 = ComponentEnhancer<{}, {}>;

export type SingleDateCalendarProps<T> = CalendarProps<T> &
  OnChangePropsSingleDateSelection;

export interface OnChangePropsSingleDateSelection {
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
}

interface SelectionLogicHandlers {
  onClickDay: (day: DayData) => void;
}

const addSelectionLogic = withHandlers<
  SingleDateCalendarProps<{}>,
  SelectionLogicHandlers
>({
  onClickDay: ({ onChange }) => (day: DayData) => {
    if (onChange) {
      onChange(day.date);
    }
  },
});

const buildSelectionState = withProps(
  ({ value }: SingleDateCalendarProps<{}>) => {
    const statePerMonth = value
      ? setDayStateValue({}, value, { highlighted: true })
      : undefined;
    return {
      statePerMonth,
      date: value,
    };
  },
);

export const withSingleDateSelection = compose(
  addSelectionLogic,
  pure,
  buildSelectionState,
);
