import * as React from 'react';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {UseTheme} from '../../src/components/theme/UseTheme';
import {StandardButton} from '../../src/components/ui/buttons/StandardButton';

export const addStandardButtonStories = () => {
  storiesOf('Buttons/StandardButton', module)
    .add('default', withInfo()(() => <StandardButton label={'Submit'} />))
    .add(
      'disabled',
      withInfo()(() => <StandardButton label={'Submit'} disabled />),
    )
    .add(
      'with icon left',
      withInfo()(() => <StandardButton label={'Submit'} leftIcon={'coffee'} />),
    )
    .add(
      'with icon right',
      withInfo()(() => <StandardButton label={'Submit'} rightIcon={'coffee'} />),
    )
    .add(
      'with borderRadius',
      withInfo()(() => <StandardButton label={'Submit'} borderRadius={'10px'}/>),
    )
    .add(
      'with loading',
      withInfo()(() => <StandardButton label={'Submit'} loading/>),
    )
    .add(
      'with success',
      withInfo()(() => <StandardButton label={'Submit'} success/>),
    )
    .add(
      'with custom theme background red',
      withInfo()(() => (
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
      )),
    );
};
