import { Store, withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { RadioButton } from '../../src/components/ui/form/radio/RadioButton';
import {
  defaultRadioButtonTheme,
  defaultRadioButtonThemeDark,
} from '../../src/components/ui/form/radio/RadioButtonTheme';
import { RadioButtonWithLabel } from '../../src/components/ui/form/radio/RadioButtonWithLabel';

interface State {
  value: boolean;
}

export const addRadioButtonStories = () => {
  storiesOf('Form/RadioButton/RadioButton', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<State>({
        value: false,
      })(({ store }: { store: Store<State> }) => (
        <RadioButton
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add('checked and disabled', () => <RadioButton value={true} disabled />)
    .add('not checked and disabled', () => (
      <RadioButton value={false} disabled />
    ))
    .add(
      'with dark theme',
      withState<State>({
        value: false,
      })(({ store }: { store: Store<State> }) => (
        <RadioButton
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={defaultRadioButtonThemeDark}
        />
      )),
    )
    .add(
      'with custom theme',
      withState<State>({
        value: false,
      })(({ store }: { store: Store<State> }) => (
        <RadioButton
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={{
            ...defaultRadioButtonTheme,
            iconColor: 'darkgreen',
            iconSize: 40,
          }}
        />
      )),
    );

  storiesOf('Form/RadioButton/RadioButtonWithLabel', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<State>({
        value: false,
      })(({ store }: { store: Store<State> }) => (
        <RadioButtonWithLabel
          label={'Add cake'}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with custom theme',
      withState<State>({
        value: false,
      })(({ store }: { store: Store<State> }) => (
        <RadioButtonWithLabel
          label={'Add cake'}
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={{
            ...defaultRadioButtonTheme,
            iconColor: 'pink',
            iconSize: 40,
            textColor: 'lightblue',
            textSize: '30px',
          }}
        />
      )),
    );
};
