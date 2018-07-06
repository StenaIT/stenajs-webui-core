import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { TimeTextInput } from '../../src/components/ui/form/date-time-input/TimeTextInput';
import { DateInput } from '../../src/components/ui/form/date-time-input/DateInput';
import { DateRangeInput } from '../../src/components/ui/form/date-time-input/DateRangeInput';
import { addMonths, addDays } from 'date-fns';
import { withState } from '@dump247/storybook-state';
import { compose } from 'recompose';

export const addDateTimeInputStories = () => {
  storiesOf('Form/DateTimeInput/TimeTextInput', module)
    .add(
      'standard',
      compose(
        withState({
          value: undefined,
        }),
        withInfo(),
      )(({ store }) => (
        <TimeTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('empty', withInfo()(() => <TimeTextInput value={''} />))
    .add('with time', withInfo()(() => <TimeTextInput value={'23:59'} />))
    .add(
      'with invalid time',
      withInfo()(() => <TimeTextInput value={'9:xx'} />),
    );

  storiesOf('Form/DateTimeInput/DateInput', module)
    .add(
      'standard',
      compose(
        withState({
          value: undefined,
        }),
        withInfo(),
      )(({ store }) => (
        <DateInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('empty', withInfo()(() => <DateInput value={undefined} />))
    .add(
      'with preselected value',
      withInfo()(() => <DateInput value={addMonths(new Date(), 2)} />),
    );
  storiesOf('Form/DateTimeInput/DateRangeInput', module)
    .add(
      'standard',
      compose(
        withState({
          value: {},
        }),
        withInfo(),
      )(({ store }) => (
        <DateRangeInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('empty', withInfo()(() => <DateRangeInput value={{}} />))
    .add(
      'with preselected value',
      withInfo()(() => (
        <DateRangeInput
          value={{ startDate: new Date(), endDate: addDays(new Date(), 5) }}
        />
      )),
    );
};
