import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import {
  DateRangeCalendar,
  DateRangeCalendarWithState,
} from '../../src/components/ui/form/calendar/DateRangeCalendar';
import { CalendarDay } from '../../src/components/ui/form/calendar/components/renderers/CalendarDay';
import { SingleDateCalendar } from '../../src/components/ui/form/calendar/SingleDateCalendar';
import { compose } from 'recompose';
import { withState } from '@dump247/storybook-state';
import { UseTheme } from '../../src/components/theme';

const withDateRangeState = compose(
  withState({
    startDate: undefined,
    endDate: undefined,
    focusedInput: 'startDate',
  }),
  withInfo(),
);

const withSingleDateState = compose(
  withState({
    value: undefined,
  }),
  withInfo(),
);

export const addCalendarStories = () => {
  storiesOf('Form/Calendar/SingleDateCalendar', module)
    .add(
      'standard',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          dayComponent={CalendarDay}
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with multiple months',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          dayComponent={CalendarDay}
          onChange={value => store.set({ value })}
          numMonths={3}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with multiple rows',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          dayComponent={CalendarDay}
          onChange={value => store.set({ value })}
          numMonths={6}
          monthsPerRow={3}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with custom theme',
      withSingleDateState(({ store }) => (
        <UseTheme
          theme={{
            components: {
              Calendar: {
                width: '70px',
                height: '70px',
                WeekNumber: {
                  backgroundColor: 'blue',
                  textColor: 'yellow',
                },
                WeekDay: { textColor: 'pink' },
                CalendarDay: {
                  textColor: '#cc3434',
                  backgroundColor: '#eeee77',
                  highlightedBackgroundColor: '#bbbb77',
                  otherMonthBackgroundColor: '#fff6ba',
                  otherMonthTextColor: '#b47673',
                },
                  CalendarMonth: {
                      headerTextColor: '#8fe792'
                  }
              },
            },
          }}
        >
          <SingleDateCalendar
            dayComponent={CalendarDay}
            onChange={value => store.set({ value })}
            value={store.state.value}
          />
        </UseTheme>
      )),
    );
  storiesOf('Form/Calendar/DateRangeCalendar', module)
    .add(
      'standard',
      withDateRangeState(({ store }) => (
        <DateRangeCalendar
          dayComponent={CalendarDay}
          onChange={() => {}}
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
      'with multiple months',
      withDateRangeState(({ store }) => (
        <DateRangeCalendar
          dayComponent={CalendarDay}
          onChange={() => {}}
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
      withDateRangeState(({ store }) => (
        <DateRangeCalendar
          dayComponent={CalendarDay}
          onChange={() => {}}
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
    );

  storiesOf('Form/Calendar/DateRangeCalendarWithState', module)
    .add(
      'standard',
      withInfo()(() => (
        <DateRangeCalendarWithState
          dayComponent={CalendarDay}
          onChange={() => {}}
        />
      )),
    )
    .add(
      'with multiple months',
      withInfo()(() => (
        <DateRangeCalendarWithState
          dayComponent={CalendarDay}
          onChange={() => {}}
          numMonths={3}
        />
      )),
    )
    .add(
      'with multiple rows',
      withInfo()(() => (
        <DateRangeCalendarWithState
          dayComponent={CalendarDay}
          onChange={() => {}}
          numMonths={6}
          monthsPerRow={3}
        />
      )),
    );
};
