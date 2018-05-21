import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { SimpleCheckbox } from '../../src';
import { CheckboxWithLabel } from '../../src/components/ui/form/checkbox/CheckboxWithLabel';
import { UseTheme } from '../../src/components/theme/UseTheme';

export const addSimpleCheckboxStories = () => {
  storiesOf('Form/Checkbox/SimpleCheckbox', module)
    .add('not checked', withInfo()(() => <SimpleCheckbox />))
    .add('checked', withInfo()(() => <SimpleCheckbox value={true} />))
    .add(
      'checked and disabled',
      withInfo()(() => <SimpleCheckbox value={true} disabled />),
    )
    .add(
      'with custom theme',
      withInfo()(() => (
        <UseTheme
          theme={{
            components: {
              SimpleCheckbox: { colorOn: 'blue', iconOn: 'clock' },
            },
          }}
        >
          <SimpleCheckbox value={true} />
        </UseTheme>
      )),
    );

  storiesOf('Form/Checkbox/CheckboxWithLabel', module)
    .add(
      'not checked',
      withInfo()(() => <CheckboxWithLabel label={'Add cake'} />),
    )
    .add(
      'checked',
      withInfo()(() => <CheckboxWithLabel label={'Add cake'} value={true} />),
    )
    .add(
      'checked and disabled',
      withInfo()(() => (
        <CheckboxWithLabel label={'Add cake'} value={true} disabled />
      )),
    );
};
