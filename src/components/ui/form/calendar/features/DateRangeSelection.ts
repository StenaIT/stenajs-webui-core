import { eachDayOfInterval, isAfter } from 'date-fns';
import {
  ComponentEnhancer,
  compose,
  pure,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import { CalendarProps, DataPerMonth, DayState } from '../components/Calendar';
import { DayData } from '../util/CalendarDataFactory';
import { ensureStartIsFirst } from '../util/CalendarIntervalValidator';
import { setDayStateValue } from '../util/StateModifier';

export type __C359813518 = ComponentEnhancer<{}, {}>;

export type DateRangeFocusedInput = 'startDate' | 'endDate' | undefined;

export type DateRangeCalendarProps<T> = CalendarProps<T> &
  DateRangeCalendarState &
  OnChangePropsDateRangeSelection;

export type DateRangeCalendarPropsWithStateProps<T> = CalendarProps<T> &
  OnChangePropsDateRangeSelection;

export interface DateRangeCalendarState {
  startDate: Date | undefined;
  endDate: Date | undefined;
  focusedInput?: DateRangeFocusedInput;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  setFocusedInput: (focusedInput: DateRangeFocusedInput) => void;
}

export interface DateRangeCalendarOnChangeValue {
  startDate?: Date;
  endDate?: Date;
}

export interface OnChangePropsDateRangeSelection {
  /** onChange handler for when the user selects a date. */
  onChange: (value: DateRangeCalendarOnChangeValue) => void;
}

type InnerProps<T> = CalendarProps<T> &
  DateRangeCalendarState &
  OnChangePropsDateRangeSelection;

interface OnClickHandlers {
  onClickDay: (day: DayData) => void;
}

const withOnClickDayHandler = withHandlers<InnerProps<{}>, OnClickHandlers>({
  onClickDay: ({
    focusedInput,
    endDate,
    startDate,
    setStartDate,
    setEndDate,
    onChange,
    setFocusedInput,
  }) => (day: DayData) => {
    if (focusedInput === 'startDate') {
      if (endDate && isAfter(day.date, endDate)) {
        setStartDate(endDate);
        setEndDate(day.date);
        if (onChange) {
          onChange({ startDate: endDate, endDate: day.date });
        }
      } else {
        setStartDate(day.date);
        setFocusedInput('endDate');
        if (onChange) {
          onChange(
            ensureStartIsFirst({
              startDate: day.date,
              endDate: endDate,
            }),
          );
        }
      }
    } else if (focusedInput === 'endDate') {
      if (startDate && isAfter(startDate, day.date)) {
        setStartDate(day.date);
        setEndDate(startDate);
        if (onChange) {
          onChange({ startDate: day.date, endDate: startDate });
        }
      } else {
        setEndDate(day.date);
        setFocusedInput('startDate');
        if (onChange) {
          onChange(
            ensureStartIsFirst({
              startDate: startDate,
              endDate: day.date,
            }),
          );
        }
      }
    }
  },
});

const toggleDatesIfEndIsEarlierThanStart = withProps(
  ({ startDate, endDate }: InnerProps<{}>) => {
    if (startDate && endDate && isAfter(startDate, endDate)) {
      return {
        startDate: endDate,
        endDate: startDate,
      };
    }
    return {};
  },
);

const buildSelectionState = withProps(
  ({ startDate, endDate }: InnerProps<{}>) => {
    const statePerMonth = buildDayState(startDate, endDate);
    return {
      statePerMonth,
    };
  },
);

const buildDayState = (
  start?: Date,
  end?: Date,
): DataPerMonth<DayState> | undefined => {
  if (start && end) {
    return eachDayOfInterval({ start, end }).reduce(
      (result: DataPerMonth<DayState>, date: Date) => {
        return setDayStateValue(result, date, { highlighted: true });
      },
      {},
    );
  }
  if (start) {
    return setDayStateValue({}, start, { highlighted: true });
  }
  if (end) {
    return setDayStateValue({}, end, { highlighted: true });
  }
  return undefined;
};

export const withDateRangeSelectionState = compose(
  withState('startDate', 'setStartDate', undefined),
  withState('endDate', 'setEndDate', undefined),
  withState('focusedInput', 'setFocusedInput', 'startDate'),
);

export const withDateRangeSelection = compose(
  withOnClickDayHandler,
  toggleDatesIfEndIsEarlierThanStart,
  pure,
  buildSelectionState,
);
