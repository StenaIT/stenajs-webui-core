import { Store, withState } from '@dump247/storybook-state';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { SingleWeekCalendar } from '../../../src/components/ui/form/calendar';

interface State {
  week: string | undefined;
}

export const addSingleWeekCalendarStories = () => {
  storiesOf('Form/Calendar/SingleWeekCalendar', module).add(
    'standard',
    withState<State>({
      week: undefined,
    })(({ store }: { store: Store<State> }) => (
      <SingleWeekCalendar
        onChange={week => store.set({ week })}
        value={store.state.week}
      />
    )),
  );
};
