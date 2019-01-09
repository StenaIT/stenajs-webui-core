import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { addDays } from 'date-fns';
import * as React from 'react';
import { UseTheme } from '../../../src/components/theme';
import {
  DateRangeCalendar,
  DateRangeFocusedInput,
  extranetCalendarTheme,
  setDayStateValue,
} from '../../../src/components/ui/form/calendar';

let statePerMonthWithTwoWeeksEnabled = {};
for (let i = 1; i < 7; i++) {
  statePerMonthWithTwoWeeksEnabled = setDayStateValue(
    statePerMonthWithTwoWeeksEnabled,
    addDays(new Date(), i),
    {
      highlights: ['enabled'],
    },
  );
}
for (let i = 10; i < 14; i++) {
  statePerMonthWithTwoWeeksEnabled = setDayStateValue(
    statePerMonthWithTwoWeeksEnabled,
    addDays(new Date(), i),
    {
      highlights: ['enabled'],
    },
  );
}

interface State {
  startDate?: Date;
  endDate?: Date;
  focusedInput: DateRangeFocusedInput;
}

export const addDateRangeCalendarStories = () => {
  storiesOf('Form/Calendar/DateRangeCalendar', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<State>({
        startDate: undefined,
        endDate: undefined,
        focusedInput: 'startDate',
      })(({ store }: { store: Store<State> }) => (
        <DateRangeCalendar
          startDate={store.state.startDate}
          endDate={store.state.endDate}
          focusedInput={store.state.focusedInput}
          setStartDate={startDate => store.set({ startDate })}
          setEndDate={endDate => store.set({ endDate })}
          setFocusedInput={focusedInput => store.set({ focusedInput })}
        />
      )),
    )
    .add(
      'with today highlighted',
      withState<State>({
        startDate: undefined,
        endDate: undefined,
        focusedInput: 'startDate',
      })(({ store }: { store: Store<State> }) => (
        <DateRangeCalendar
          highlightToday
          startDate={store.state.startDate}
          endDate={store.state.endDate}
          focusedInput={store.state.focusedInput}
          setStartDate={startDate => store.set({ startDate })}
          setEndDate={endDate => store.set({ endDate })}
          setFocusedInput={focusedInput => store.set({ focusedInput })}
        />
      )),
    )
    .add(
      'with default highlights',
      withState<State>({
        startDate: undefined,
        endDate: undefined,
        focusedInput: 'startDate',
      })(({ store }: { store: Store<State> }) => {
        return (
          <DateRangeCalendar
            startDate={store.state.startDate}
            endDate={store.state.endDate}
            focusedInput={store.state.focusedInput}
            setStartDate={startDate => store.set({ startDate })}
            setEndDate={endDate => store.set({ endDate })}
            setFocusedInput={focusedInput => store.set({ focusedInput })}
            defaultHighlights={['disabled']}
            statePerMonth={statePerMonthWithTwoWeeksEnabled}
          />
        );
      }),
    )
    .add(
      'with multiple months',
      withState<State>({
        startDate: undefined,
        endDate: undefined,
        focusedInput: 'startDate',
      })(({ store }: { store: Store<State> }) => (
        <DateRangeCalendar
          numMonths={3}
          startDate={store.state.startDate}
          endDate={store.state.endDate}
          focusedInput={store.state.focusedInput}
          setStartDate={startDate => store.set({ startDate })}
          setEndDate={endDate => store.set({ endDate })}
          setFocusedInput={focusedInput => store.set({ focusedInput })}
        />
      )),
    )
    .add(
      'with multiple rows',
      withState<State>({
        startDate: undefined,
        endDate: undefined,
        focusedInput: 'startDate',
      })(({ store }: { store: Store<State> }) => (
        <DateRangeCalendar
          numMonths={6}
          monthsPerRow={3}
          startDate={store.state.startDate}
          endDate={store.state.endDate}
          focusedInput={store.state.focusedInput}
          setStartDate={startDate => store.set({ startDate })}
          setEndDate={endDate => store.set({ endDate })}
          setFocusedInput={focusedInput => store.set({ focusedInput })}
        />
      )),
    )
    .add(
      'with custom theme',
      withState<State>({
        startDate: undefined,
        endDate: undefined,
        focusedInput: 'startDate',
      })(({ store }: { store: Store<State> }) => (
        <UseTheme
          theme={{
            components: {
              Calendar: extranetCalendarTheme,
            },
          }}
        >
          <DateRangeCalendar
            numMonths={6}
            monthsPerRow={3}
            startDate={store.state.startDate}
            endDate={store.state.endDate}
            focusedInput={store.state.focusedInput}
            setStartDate={startDate => store.set({ startDate })}
            setEndDate={endDate => store.set({ endDate })}
            setFocusedInput={focusedInput => store.set({ focusedInput })}
          />
        </UseTheme>
      )),
    );
};
