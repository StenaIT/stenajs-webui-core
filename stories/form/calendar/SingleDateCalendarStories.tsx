import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { addDays, getISOWeek } from 'date-fns';
import * as React from 'react';
import { UseTheme } from '../../../src/components/theme';
import {
  CalendarTheme,
  extranetCalendarTheme,
  OnClickWeek,
  RenderWeekNumber,
  setDayStateValue,
  SingleDateCalendar,
  WeekData,
  WeekNumberCell,
} from '../../../src/components/ui/form/calendar';
import { Icon } from '../../../src/components/ui/icon';
import { Row, Space } from '../../../src/components/ui/layout';
import { Absolute } from '../../../src/components/ui/positioning';

interface State {
  value?: Date;
}

const disabledTomorrow = setDayStateValue(undefined, addDays(new Date(), 1), {
  highlights: ['disabled'],
});

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

export const addSingleDateCalendarStories = () => {
  storiesOf('Form/Calendar/SingleDateCalendar', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )),
    )
    .add(
      'today highlighted',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          highlightToday
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with disabled date tomorrow',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
          statePerMonth={disabledTomorrow}
        />
      )),
    )
    .add(
      'with disabled as default',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          defaultHighlights={['disabled']}
          onChange={value => store.set({ value })}
          value={store.state.value}
          statePerMonth={statePerMonthWithTwoWeeksEnabled}
        />
      )),
    )
    .add(
      'with month switcher below',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
          monthSwitcherPlacement={'below'}
        />
      )),
    )
    .add(
      'with multiple months',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          numMonths={3}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with multiple rows',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          numMonths={6}
          monthsPerRow={3}
          value={store.state.value}
        />
      )),
    )
    .add(
      'with custom week content',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => {
        const renderWeekNumber: RenderWeekNumber = (
          week: WeekData,
          theme: CalendarTheme,
          onClick?: OnClickWeek,
        ) => {
          const now = new Date();
          return (
            <WeekNumberCell
              week={week}
              onClickWeek={onClick}
              theme={theme}
              background={
                week.startYear === now.getFullYear() &&
                week.weekNumber === getISOWeek(now) ? (
                  <Icon name={'coffee'} color={'blue'} size={30} />
                ) : (
                  undefined
                )
              }
            />
          );
        };

        return (
          <SingleDateCalendar
            onChange={value => store.set({ value })}
            value={store.state.value}
            renderWeekNumber={renderWeekNumber}
          />
        );
      }),
    )
    .add(
      'with custom content',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
        <SingleDateCalendar
          onChange={value => store.set({ value })}
          value={store.state.value}
          extraDayContent={() => (
            <Absolute top={'-10px'} right={'-10px'}>
              <Icon name={'coffee'} />
            </Absolute>
          )}
        />
      )),
    )
    .add(
      'with global custom theme',
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
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
      withState<State>({
        value: undefined,
      })(({ store }: { store: Store<State> }) => (
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
};
