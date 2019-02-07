import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Switch } from '../../src/components/ui/form/switch/Switch';
import { defaultSwitchTheme } from '../../src/components/ui/form/switch/SwitchTheme';

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
    )
    .add(
      'custom size',
      withState<State>({
        checked: true,
      })(({ store }: { store: Store<State> }) => (
        <Switch
          checked={store.state.checked}
          onChange={checked => store.set({ checked })}
          value="checkbox"
          theme={{
            ...defaultSwitchTheme,
            height: 40,
            width: 200,
          }}
        />
      )),
    )
    .add(
      'custom style',
      withState<State>({
        checked: true,
      })(({ store }: { store: Store<State> }) => (
        <Switch
          checked={store.state.checked}
          onChange={checked => store.set({ checked })}
          value="checkbox"
          theme={{
            ...defaultSwitchTheme,
            borderRadius: 10,
            checkedColors: {
              backgroundColor: 'lightgreen',
              iconBackgroundColor: 'pink',
              iconColor: 'darkblue',
            },
            colors: {
              backgroundColor: 'pink',
              iconBackgroundColor: 'darkblue',
              iconColor: 'lightgreen',
            },
            height: 20,
            width: 100,
          }}
        />
      )),
    );
};
