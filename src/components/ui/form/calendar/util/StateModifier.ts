import { format, getDate, getISOWeek } from 'date-fns';
import { DataPerMonth, DayState } from '../components/Calendar';

export const setDayStateValue = (
  state: DataPerMonth<DayState> | undefined,
  date: Date,
  values: Partial<DayState>,
): DataPerMonth<DayState> => {
  const monthString = format(date, 'YYYY-MM');
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
