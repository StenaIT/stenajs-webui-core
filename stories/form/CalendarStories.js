import { withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { addDays } from 'date-fns';
import * as React from 'react';
import { compose } from 'recompose';
import { UseTheme } from '../../src/components/theme';
import { extranetCalendarTheme } from '../../src/components/ui/form/calendar/components';
import {
  DateRangeCalendar,
  DateRangeCalendarWithState,
} from '../../src/components/ui/form/calendar/DateRangeCalendar';
import { SingleDateCalendar } from '../../src/components/ui/form/calendar/SingleDateCalendar';
import { setDayStateValue } from '../../src/components/ui/form/calendar/util';
import { Icon } from '../../src/components/ui/icon';
import { Row, Space } from '../../src/components/ui/layout';
import { Absolute } from '../../src/components/ui/positioning';

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
  const dayStateValue = setDayStateValue(undefined, addDays(new Date(), 1), {
    highlights: ['disabled'],
  });
  storiesOf('Form/Calendar/SingleDateCalendar', module)
    .add(
      'standard',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with disabled date tomorrow',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
          statePerMonth={dayStateValue}
        />
      )),
    )
    .add(
      'with month switcher below',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
          monthSwitcherPlacement={'below'}
        />
      )),
    )
    .add(
      'with multiple months',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
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
          onChange={value => store.set({ value })}
          numMonths={6}
          monthsPerRow={3}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with custom content',
      withSingleDateState(({ store }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
          extraDayContent={() => (
            <Absolute top={0} right={0}>
              <Icon name={'coffee'} />
            </Absolute>
          )}
        />
      )),
    )
    .add(
      'with global custom theme',
      withSingleDateState(({ store }) => (
        <UseTheme
          theme={{
            components: {
              Calendar: extranetCalendarTheme,
            },
          }}
        >
          <SingleDateCalendar
            onChange={value => store.set({ value })}
            value={store.state.value}
          />
        </UseTheme>
      )),
    )
    .add(
      'with instance custom theme',
      withSingleDateState(({ store }) => (
        <Row>
          <SingleDateCalendar
            onChange={value => store.set({ value })}
            value={store.state.value}
            theme={extranetCalendarTheme}
          />
          <Space num={2} />
          <SingleDateCalendar
            onChange={value => store.set({ value })}
            value={store.state.value}
          />
        </Row>
      )),
    );
  storiesOf('Form/Calendar/DateRangeCalendar', module)
    .add(
      'standard',
      withDateRangeState(({ store }) => (
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
      'with multiple months',
      withDateRangeState(({ store }) => (
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
      withDateRangeState(({ store }) => (
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
      withDateRangeState(({ store }) => (
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

  storiesOf('Form/Calendar/DateRangeCalendarWithState', module)
    .add(
      'standard',
      withInfo()(() => <DateRangeCalendarWithState onChange={() => {}} />),
    )
    .add(
      'with multiple months',
      withInfo()(() => (
        <DateRangeCalendarWithState onChange={() => {}} numMonths={3} />
      )),
    )
    .add(
      'with multiple rows',
      withInfo()(() => (
        <DateRangeCalendarWithState
          onChange={() => {}}
          numMonths={6}
          monthsPerRow={3}
        />
      )),
    )
    .add(
      'with custom theme',
      withInfo()(() => (
        <UseTheme
          theme={{
            components: {
              Calendar: extranetCalendarTheme,
            },
          }}
        >
          <DateRangeCalendarWithState
            onChange={() => {}}
            numMonths={6}
            monthsPerRow={3}
          />
        </UseTheme>
      )),
    );
};
