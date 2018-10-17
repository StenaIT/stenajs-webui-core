import { format, getDate, getISOWeek } from 'date-fns';
import { DateFormats } from '../../../../../util/date/DateFormats';
import {
  DataPerMonth,
  DayState,
  DayStateHighlight,
} from '../components/Calendar';

export const setDayStateValue = (
  state: DataPerMonth<DayState> | undefined,
  date: Date,
  values: Partial<DayState>,
): DataPerMonth<DayState> => {
  const monthString = format(date, DateFormats.yearAndMonth);
  const weekNumber = getISOWeek(date);
  const dayInMonth = getDate(date);
  return {
    ...state,
    [monthString]: {
      ...(state && state[monthString]),
      [weekNumber]: {
        ...(state && state[monthString] && state[monthString][weekNumber]),
        [dayInMonth]: {
          ...(state &&
            state[monthString] &&
            state[monthString][weekNumber] &&
            state[monthString][weekNumber][dayInMonth]),
          ...values,
        },
      },
    },
  };
};

export const setDayStateValueFunction = (
  state: DataPerMonth<DayState> | undefined,
  date: Date,
  setter: (dayState: DayState | undefined) => Partial<DayState>,
): DataPerMonth<DayState> => {
  const monthString = format(date, DateFormats.yearAndMonth);
  const weekNumber = getISOWeek(date);
  const dayInMonth = getDate(date);
  return {
    ...state,
    [monthString]: {
      ...(state && state[monthString]),
      [weekNumber]: {
        ...(state && state[monthString] && state[monthString][weekNumber]),
        [dayInMonth]: {
          ...(state &&
            state[monthString] &&
            state[monthString][weekNumber] &&
            state[monthString][weekNumber][dayInMonth]),
          ...setter(
            state &&
              state[monthString] &&
              state[monthString][weekNumber] &&
              state[monthString][weekNumber][dayInMonth],
          ),
        },
      },
    },
  };
};
export const addDayStateHighlights = (
  state: DataPerMonth<DayState> | undefined,
  date: Date,
  highlights: Array<DayStateHighlight>,
): DataPerMonth<DayState> => {
  const month = date.getMonth() + 1;
  const monthString = `${date.getFullYear()}-${month < 10 ? '0' : ''}${month}`;
  const weekNumber = getISOWeek(date);
  const dayInMonth = getDate(date);
  const dayState: DayState | undefined =
    state &&
    state[monthString] &&
    state[monthString][weekNumber] &&
    state[monthString][weekNumber][dayInMonth];

  const newHighlights: Array<DayStateHighlight> =
    dayState && dayState.highlights
      ? [...dayState.highlights, ...highlights]
      : highlights;

  return {
    ...state,
    [monthString]: {
      ...(state && state[monthString]),
      [weekNumber]: {
        ...(state && state[monthString] && state[monthString][weekNumber]),
        [dayInMonth]: {
          ...dayState,
          highlights: newHighlights,
        },
      },
    },
  };
};
