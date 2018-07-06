import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { SimpleTextInput } from '../../src/components/ui/form/text-input/SimpleTextInput';
import { DefaultTextInput } from '../../src/components/ui/form/text-input/DefaultTextInput';
import { TimeTextInput } from '../../src/components/ui/form/date-time-input/TimeTextInput';
import { UseTheme } from '../../src/components/theme/UseTheme';

export const addTextInputStories = () => {
  storiesOf('Form/TextInput/SimpleTextInput', module)
    .add('empty', withInfo()(() => <SimpleTextInput value={''} />))
    .add(
      'with placebolder',
      withInfo()(() => (
        <SimpleTextInput value={''} placeholder={'Enter name'} />
      )),
    )
    .add(
      'standard',
      withInfo()(() => <SimpleTextInput value={'some entered text'} />),
    );

  storiesOf('Form/TextInput/DefaultTextInput', module)
    .add('empty', withInfo()(() => <DefaultTextInput value={''} />))
    .add(
      'with placebolder',
      withInfo()(() => (
        <DefaultTextInput value={''} placeholder={'Enter name'} />
      )),
    )
    .add(
      'standard',
      withInfo()(() => <DefaultTextInput value={'some entered text'} />),
    )
    .add(
      'with custom theme',
      withInfo()(() => (
        <UseTheme
          theme={{
            components: {
              DefaultTextInput: {
                height: '58px',
                paddingLeft: '12px',
                paddingRight: '12px',
              },
            },
          }}
        >
          <DefaultTextInput value={'some entered text'} />
        </UseTheme>
      )),
    );
};
