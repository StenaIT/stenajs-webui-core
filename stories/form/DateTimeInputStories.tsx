import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { addDays, addMonths } from 'date-fns';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme';
import { DateRangeCalendarOnChangeValue } from '../../src/components/ui/form/calendar/features';
import { defaultDateInputTheme } from '../../src/components/ui/form/date-time-input';
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
    .add(
      'empty',
      withState<TimeTextInputState>({
        value: '',
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with time',
      withState<TimeTextInputState>({
        value: '23:59',
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with invalid time',
      withState<TimeTextInputState>({
        value: '9:xx',
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'without icon',
      withState<TimeTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
          useIcon={false}
        />
      )),
    )
    .add(
      'without placeholder',
      withState<TimeTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
          showPlaceholder={false}
        />
      )),
    )
    .add(
      'disabled',
      withState<TimeTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<TimeTextInputState> }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
          disabled={true}
        />
      )),
    );

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
    .add(
      'custom styled icon',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <UseTheme
          theme={{
            components: {
              DateInput: {
                ...defaultDateInputTheme,
                iconColor: 'orange',
                iconHighlightedColor: 'pink',
              },
            },
          }}
        >
          <DateTextInput
            value={store.state.value}
            onChange={value => store.set({ value })}
          />
        </UseTheme>
      )),
    )
    .add(
      'custom calendar props',
      withState<DateTextInputState>({
        value: undefined,
      })(({ store }: { store: Store<DateTextInputState> }) => (
        <DateTextInput
          calendarProps={{
            defaultHighlights: ['disabled'],
            highlightToday: true,
          }}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    );
};
