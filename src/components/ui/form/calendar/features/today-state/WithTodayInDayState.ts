import { withPropsOnChange } from 'recompose';
import { CalendarProps } from '../../components/Calendar';
import { addDayStateHighlights } from '../../util/StateModifier';

export const withTodayInDayState = <T>() =>
  withPropsOnChange<Pick<CalendarProps<T>, 'statePerMonth'>, CalendarProps<T>>(
    ['statePerMonth'],
    ({ statePerMonth, highlightToday }) => {
      return {
        statePerMonth: highlightToday
          ? addDayStateHighlights(statePerMonth, new Date(), ['today'])
          : statePerMonth,
      };
    },
  );
