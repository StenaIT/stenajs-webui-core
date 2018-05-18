import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { SmallButton } from '../../src/components/ui/buttons/SmallButton';

export const addSmallButtonStories = () => {
  storiesOf('Buttons/SmallButton', module)
    .add('default', withInfo()(() => <SmallButton label={'Submit'} />))
    .add(
      'disabled',
      withInfo()(() => <SmallButton label={'Submit'} disabled />),
    )
    .add(
      'with icon left',
      withInfo()(() => <SmallButton label={'Submit'} leftIcon={'coffee'} />),
    )
    .add(
      'with icon right',
      withInfo()(() => <SmallButton label={'Submit'} rightIcon={'coffee'} />),
    )
    .add(
      'with borderRadius',
      withInfo()(() => <SmallButton label={'Submit'} borderRadius={'10px'} />),
    )
    .add(
      'with loading',
      withInfo()(() => <SmallButton label={'Submit'} loading />),
    )
    .add(
      'with success',
      withInfo()(() => <SmallButton label={'Submit'} success />),
    )
    .add(
      'with custom theme with height=16',
      withInfo()(() => (
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
      )),
    );
};
