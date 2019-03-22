import { Store, withState } from '@dump247/storybook-state';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Background } from '../../../src/components/ui/colors';
import {
  defaultNumericTextInputThemeDark,
  NumericTextInput,
} from '../../../src/components/ui/form/text-input';
import { Indent, Spacing } from '../../../src/components/ui/layout';
import { DefaultText } from '../../../src/components/ui/text';
import { defaultColors } from '../../../src/themes/default-values';

interface State {
  value: number;
}

export const addNumericTextInputStories = () => {
  storiesOf('Form/TextInput/NumericTextInput', module)
    .addDecorator(withInfo())
    .add(
      'standard',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <NumericTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with dark theme',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <div style={{ width: '400px' }}>
          <Background color={'#2e4662'}>
            <Indent num={4}>
              <Spacing num={4}>
                <NumericTextInput
                  value={store.state.value}
                  onChange={value => store.set({ value })}
                  theme={defaultNumericTextInputThemeDark}
                />
              </Spacing>
            </Indent>
          </Background>
        </div>
      )),
    )
    .add(
      'disabled',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <NumericTextInput
          disabled
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'hidden buttons',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <NumericTextInput
          hideButtons
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with left icon',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <NumericTextInput
          iconLeft={faCoffee}
          value={store.state.value}
          min={1}
          max={8}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with content right',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <NumericTextInput
          value={store.state.value}
          min={1}
          max={8}
          contentRight={
            <DefaultText color={defaultColors.disabledText}>sec</DefaultText>
          }
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with min and max',
      withState<State>({
        value: 5,
      })(({ store }: { store: Store<State> }) => (
        <NumericTextInput
          min={3}
          max={8}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    );
};
