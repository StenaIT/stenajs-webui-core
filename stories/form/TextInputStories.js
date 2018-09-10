import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { DefaultTextInput } from '../../src/components/ui/form/text-input/DefaultTextInput';
import { SimpleTextInput } from '../../src/components/ui/form/text-input/SimpleTextInput';
import { DefaultText } from '../../src/components/ui/text';
import { defaultColors } from '../../src/themes';

export const addTextInputStories = () => {
  storiesOf('Form/TextInput/SimpleTextInput', module)
    .add(
      'standard',
      withInfo()(() => <SimpleTextInput value={'some entered text'} />),
    )
    .add('empty', withInfo()(() => <SimpleTextInput value={''} />))
    .add(
      'focus on mount',
      withInfo()(() => <SimpleTextInput value={''} focusOnMount />),
    )
    .add(
      'select all on mount',
      withInfo()(() => (
        <SimpleTextInput value={'this is selected'} selectAllOnMount />
      )),
    )
    .add(
      'with placeholder',
      withInfo()(() => (
        <SimpleTextInput value={''} placeholder={'Enter name'} />
      )),
    )
    .add(
      'with placeholder color',
      withInfo()(() => (
        <SimpleTextInput
          value={''}
          placeholder={'Enter name'}
          placeholderColor={'red'}
        />
      )),
    );

  storiesOf('Form/TextInput/DefaultTextInput', module)
    .add(
      'standard',
      withInfo()(() => <DefaultTextInput value={'some entered text'} />),
    )
    .add(
      'with icon left',
      withInfo()(() => (
        <DefaultTextInput value={'some entered text'} iconLeft={'coffee'} />
      )),
    )
    .add(
      'with icon right',
      withInfo()(() => (
        <DefaultTextInput value={'some entered text'} iconRight={'paw'} />
      )),
    )
    .add(
      'with content left',
      withInfo()(() => (
        <DefaultTextInput
          value={'some entered text'}
          contentLeft={<DefaultText>W</DefaultText>}
        />
      )),
    )
    .add(
      'with icons with colors',
      withInfo()(() => (
        <DefaultTextInput
          value={'some entered text'}
          iconLeft={'coffee'}
          iconRight={'paw'}
          iconColorLeft={'red'}
          iconColorRight={'green'}
        />
      )),
    )
    .add(
      'with icons and background color',
      withInfo()(() => (
        <DefaultTextInput
          value={'some entered text'}
          iconLeft={'coffee'}
          iconRight={'paw'}
          backgroundColor={defaultColors.errorBgLight}
        />
      )),
    )
    .add('empty', withInfo()(() => <DefaultTextInput value={''} />))
    .add(
      'with placeholder',
      withInfo()(() => (
        <DefaultTextInput value={''} placeholder={'Enter name'} />
      )),
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
