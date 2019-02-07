import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Switch } from '../../src/components/ui/form/switch/Switch';

interface State {
  checked: boolean;
}

export const addSwitchStories = () => {
  storiesOf('Form/Switch', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<State>({
        checked: true,
      })(({ store }: { store: Store<State> }) => (
        <Switch
          checked={store.state.checked}
          onChange={checked => store.set({ checked })}
          value="checkbox"
        />
      )),
    );
};
