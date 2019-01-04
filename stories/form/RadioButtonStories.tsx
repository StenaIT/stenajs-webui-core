import { withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { RadioButton } from '../../src/components/ui/form/radio/RadioButton';
import { defaultRadioButtonThemeDark } from '../../src/components/ui/form/radio/RadioButtonTheme';
import { RadioButtonWithLabel } from '../../src/components/ui/form/radio/RadioButtonWithLabel';

export const addRadioButtonStories = () => {
  storiesOf('Form/RadioButton/RadioButton', module)
    .add(
      'standard',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <RadioButton
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'checked and disabled',
      withInfo()(() => <RadioButton value={true} disabled />),
    )
    .add(
      'not checked and disabled',
      withInfo()(() => <RadioButton value={false} disabled />),
    )
    .add(
      'with dark theme',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <RadioButton
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={defaultRadioButtonThemeDark}
        />
      )),
    )
    .add(
      'with custom theme',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <RadioButton
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={{
            iconColor: 'darkgreen',
            iconSize: 40,
          }}
        />
      )),
    );

  storiesOf('Form/RadioButton/RadioButtonWithLabel', module)
    .add(
      'standard',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <RadioButtonWithLabel
          label={'Add cake'}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with custom theme',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <RadioButtonWithLabel
          label={'Add cake'}
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={{
            iconColor: 'pink',
            iconSize: 40,
            textColor: 'lightblue',
            textSize: '30px',
          }}
        />
      )),
    );
};
