import { withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { SimpleCheckbox } from '../../src';
import { defaultSimpleCheckboxThemeDark } from '../../src/components/ui/form/checkbox';
import { CheckboxWithLabel } from '../../src/components/ui/form/checkbox/CheckboxWithLabel';

export const addCheckboxStories = () => {
  storiesOf('Form/Checkbox/SimpleCheckbox', module)
    .add(
      'standard',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <SimpleCheckbox
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'checked and disabled',
      withInfo()(() => <SimpleCheckbox value={true} disabled />),
    )
    .add(
      'not checked and disabled',
      withInfo()(() => <SimpleCheckbox value={false} disabled />),
    )
    .add(
      'with dark theme',
      compose(
        withInfo(),
        withState({
          value: false,
        }),
      )(({ store }) => (
        <SimpleCheckbox
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={defaultSimpleCheckboxThemeDark}
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
        <SimpleCheckbox
          value={store.state.value}
          onChange={value => store.set({ value })}
          theme={{
            borderColor: 'red',
            iconColor: 'blue',
            checkIcon: 'coffee',
            borderRadius: '8px',
          }}
        />
      )),
    );

  storiesOf('Form/Checkbox/CheckboxWithLabel', module).add(
    'standard',
    compose(
      withInfo(),
      withState({
        value: false,
      }),
    )(({ store }) => (
      <CheckboxWithLabel
        label={'Add cake'}
        value={store.state.value}
        onChange={value => store.set({ value })}
      />
    )),
  );
};
