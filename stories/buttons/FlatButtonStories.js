import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { FlatButton } from '../../src/components/ui/buttons/FlatButton';

export const addFlatButtonStories = () => {
  storiesOf('Buttons/FlatButton', module)
    .add('default', withInfo()(() => <FlatButton label={'Submit'} />))
    .add('disabled', withInfo()(() => <FlatButton label={'Submit'} disabled />))
    .add(
      'with icon left',
      withInfo()(() => <FlatButton label={'Submit'} leftIcon={'coffee'} />),
    )
    .add(
      'with icon right',
      withInfo()(() => <FlatButton label={'Submit'} rightIcon={'coffee'} />),
    )
    .add(
      'with loading',
      withInfo()(() => <FlatButton label={'Submit'} loading />),
    )
    .add(
      'with success',
      withInfo()(() => <FlatButton label={'Submit'} success />),
    )
    .add(
      'with custom theme with textColor=red',
      withInfo({ propTablesExclude: [UseTheme] })(() => (
        <UseTheme
          theme={{
            components: {
              FlatButton: {
                textColor: 'red',
              },
            },
          }}
        >
          <FlatButton label={'Submit'} />
        </UseTheme>
      )),
    );
};
