import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { SimpleCheckbox } from '../../src';
import { CheckboxWithLabel } from '../../src/components/ui/form/CheckboxWithLabel';

export const addSimpleCheckboxStories = () => {
  storiesOf('Form/Checkbox/SimpleCheckbox', module)
    .add('not checked', withInfo()(() => <SimpleCheckbox />))
    .add('checked', withInfo()(() => <SimpleCheckbox value={true} />))
    .add(
      'checked and disabled',
      withInfo()(() => <SimpleCheckbox value={true} disabled />),
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
