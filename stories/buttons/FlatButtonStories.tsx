import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { FlatButton } from '../../src/components/ui/buttons/FlatButton';
import { stenaWebUiCoreStyles } from '../../src/util/theme/stylesheet';
import { DefaultText } from '../../src/components/ui/text';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { StorybookCanvasWrapper } from '../utils/StorybookCanvasWrapper';

export const addFlatButtonStories = () => {
  storiesOf('Buttons/FlatButton', module)
    .addDecorator(
      withInfo({
        styles: stenaWebUiCoreStyles,
        propTablesExclude: [DefaultText, Spacing, Indent],
        inline: true,
      }),
    )
    .add('default', () => (
      <StorybookCanvasWrapper>
        <FlatButton label={'Submit'} />
      </StorybookCanvasWrapper>
    ))
    .add('disabled', () => <FlatButton label={'Submit'} disabled />)
    .add('with icon left', () => (
      <FlatButton label={'Submit'} leftIcon={faCoffee} />
    ))
    .add('with icon right', () => (
      <FlatButton label={'Submit'} rightIcon={faCoffee} />
    ))
    .add('with loading', () => <FlatButton label={'Submit'} loading />)
    .add('with success', () => <FlatButton label={'Submit'} success />)
    .add('with custom theme with textColor=red', () => (
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
    ));
};
