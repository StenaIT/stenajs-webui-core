import { withPropsOnChange } from 'recompose';
import { CalendarProps } from '../../components/Calendar';
import { setDayStateValueFunction } from '../../util/StateModifier';

export const withTodayInDayState = <T>() =>
  withPropsOnChange<Pick<CalendarProps<T>, 'statePerMonth'>, CalendarProps<T>>(
    ['statePerMonth'],
    ({ statePerMonth }) => {
      return {
        statePerMonth: setDayStateValueFunction(
          statePerMonth,
          new Date(),
          dayState => {
            const prevHighlights =
              dayState && dayState.highlights !== undefined
                ? dayState.highlights
                : [];
            return {
              highlights: [...prevHighlights, 'today'],
            };
          },
        ),
      };
    },
  );
