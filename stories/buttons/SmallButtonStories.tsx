import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { SmallButton } from '../../src/components/ui/buttons/SmallButton';

export const addSmallButtonStories = () => {
  storiesOf('Buttons/SmallButton', module)
    .addDecorator(withInfo())
    .add('default', () => <SmallButton label={'Submit'} />)
    .add('disabled', () => <SmallButton label={'Submit'} disabled />)
    .add('with icon left', () => (
      <SmallButton label={'Submit'} leftIcon={'coffee'} />
    ))
    .add('with icon right', () => (
      <SmallButton label={'Submit'} rightIcon={'coffee'} />
    ))
    .add('with borderRadius', () => (
      <SmallButton label={'Submit'} borderRadius={'10px'} />
    ))
    .add('with loading', () => <SmallButton label={'Submit'} loading />)
    .add('with success', () => <SmallButton label={'Submit'} success />)
    .add('with custom theme with height=16', () => (
      <UseTheme
        theme={{
          components: {
            SmallButton: {
              height: '16px',
            },
          },
        }}
      >
        <SmallButton label={'Submit'} />
      </UseTheme>
    ));
};
