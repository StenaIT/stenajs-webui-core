import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { addDays, addMonths } from 'date-fns';
import * as React from 'react';
import { DateRangeCalendarOnChangeValue } from '../../src/components/ui/form/calendar/features';
import { DateInput } from '../../src/components/ui/form/date-time-input/DateInput';
import { DateRangeInput } from '../../src/components/ui/form/date-time-input/DateRangeInput';
import { DateTextInput } from '../../src/components/ui/form/date-time-input/DateTextInput';
import { TimeTextInput } from '../../src/components/ui/form/date-time-input/TimeTextInput';

interface TimeTextInputState {
  value?: string;
}

interface DateInputState {
  value?: Date;
}

interface DateRangeState {
  value: DateRangeCalendarOnChangeValue;
}

interface DateTextInputState {
  value?: string;
}

export const addDateTimeInputStories = () => {
  storiesOf('Form/DateTimeInput/TimeTextInput', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<TimeTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('empty', () => <TimeTextInput value={''} />)
    .add('with time', () => <TimeTextInput value={'23:59'} />)
    .add('with invalid time', () => <TimeTextInput value={'9:xx'} />);

  storiesOf('Form/DateTimeInput/DateInput', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<DateInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateInputState> }) => (
        <DateInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('empty', () => <DateInput value={undefined} />)
    .add('with preselected value', () => (
      <DateInput value={addMonths(new Date(), 2)} />
    ));

  storiesOf('Form/DateTimeInput/DateRangeInput', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<DateRangeState>({
        value: {
          endDate: undefined,
          startDate: undefined,
        },
      })(({ store }: { store: Store<DateRangeState> }) => (
        <DateRangeInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('empty', () => <DateRangeInput value={{}} />)
    .add('with preselected value', () => (
      <DateRangeInput
        value={{ startDate: new Date(), endDate: addDays(new Date(), 5) }}
      />
    ));

  storiesOf('Form/DateTimeInput/DateTextInput', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'english date format',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          dateFormat={'dd/MM/yyyy'}
          placeholder={'DD/MM/YYYY'}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'netherlands date format',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          dateFormat={'dd-MM-yyyy'}
          placeholder={'DD-MM-YYYY'}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'without calender',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          useCalenderIcon={false}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with disabled calender icon',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          disableCalender={true}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'disabled',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
          disabled={true}
        />
      )),
    )
    ;
};
