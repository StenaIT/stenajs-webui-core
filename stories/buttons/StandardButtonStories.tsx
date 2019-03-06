import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { StandardButton } from '../../src/components/ui/buttons/StandardButton';

export const addStandardButtonStories = () => {
  storiesOf('Buttons/StandardButton', module)
    .addDecorator(withInfo())
    .add('default', () => (
      <StandardButton label={'Submit'} onClick={() => alert('Click')} />
    ))
    .add('disabled', () => <StandardButton label={'Submit'} disabled />)
    .add('with icon and no text', () => <StandardButton leftIcon={'coffee'} />)
    .add('with icon left', () => (
      <StandardButton label={'Submit'} leftIcon={'coffee'} />
    ))
    .add('with icon right', () => (
      <StandardButton label={'Submit'} rightIcon={'coffee'} />
    ))
    .add('with borderRadius', () => (
      <StandardButton label={'Submit'} borderRadius={'10px'} />
    ))
    .add('with loading', () => <StandardButton label={'Submit'} loading />)
    .add('with success', () => <StandardButton label={'Submit'} success />)
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
