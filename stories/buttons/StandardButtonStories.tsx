import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { StandardButton } from '../../src/components/ui/buttons/StandardButton';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';

export const addStandardButtonStories = () => {
  storiesOf('Buttons/StandardButton', module)
    .addDecorator(withInfo())
    .add('default', () => (
      <StandardButton label={'Submit'} onClick={() => alert('Click')} />
    ))
    .add('disabled', () => <StandardButton label={'Submit'} disabled />)
    .add('with icon and no text', () => <StandardButton leftIcon={faCoffee} />)
    .add('with icon left', () => (
      <StandardButton label={'Submit'} leftIcon={faCoffee} />
    ))
    .add('with icon right', () => (
      <StandardButton label={'Submit'} rightIcon={faCoffee} />
    ))
    .add('with borderRadius', () => (
      <StandardButton label={'Submit'} borderRadius={'10px'} />
    ))
    .add('with loading', () => <StandardButton label={'Submit'} loading />)
    .add('with success', () => (
      <StandardButton label={'Submit'} success successIconColor="#FFFFFF" />
    ))
    .add('with success text', () => (
      <StandardButton label={'Submit'} success successText="Saved!" />
    ))
    .add('with success colored text', () => (
      <StandardButton
        label={'Submit'}
        success
        successText="Saved!"
        successIconColor="#FFFFFF"
        successTextColor="#FFFFFF"
      />
    ))
    .add('with custom theme background red', () => (
      <UseTheme
        theme={{
          components: {
            Button: {
              bgColor: 'red',
            },
          },
        }}
      >
        <StandardButton label={'Submit'} />
      </UseTheme>
    ));
};
