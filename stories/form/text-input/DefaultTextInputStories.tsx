import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../../src/components/theme';
import { Background } from '../../../src/components/ui/colors';
import {
  DefaultTextInput,
  defaultTextInputThemeDark,
} from '../../../src/components/ui/form/text-input';
import { Indent, Spacing } from '../../../src/components/ui/layout';
import { DefaultText } from '../../../src/components/ui/text';
import { defaultColors } from '../../../src/themes/default-values';

export const addDefaultTextInputStories = () => {
  storiesOf('Form/TextInput/DefaultTextInput', module)
    .addDecorator(withInfo())
    .add('standard', () => <DefaultTextInput value={'some entered text'} />)
    .add('with dark theme', () => (
      <div style={{ width: '400px' }}>
        <Background color={'#2e4662'}>
          <Indent num={4}>
            <Spacing num={4}>
              <DefaultTextInput
                value={'some entered text'}
                theme={defaultTextInputThemeDark}
              />
            </Spacing>
          </Indent>
        </Background>
      </div>
    ))
    .add('with dark theme and icons', () => (
      <div style={{ width: '400px' }}>
        <Background color={'#2e4662'}>
          <Indent num={4}>
            <Spacing num={4}>
              <DefaultTextInput
                value={'some entered text'}
                iconLeft={'coffee'}
                theme={defaultTextInputThemeDark}
              />
            </Spacing>
          </Indent>
        </Background>
      </div>
    ))
    .add('with icon left', () => (
      <DefaultTextInput value={'some entered text'} iconLeft={'coffee'} />
    ))
    .add('with icon right', () => (
      <DefaultTextInput value={'some entered text'} iconRight={'paw'} />
    ))
    .add('with content left', () => (
      <DefaultTextInput
        value={'some entered text'}
        contentLeft={<DefaultText>W</DefaultText>}
      />
    ))
    .add('with content right', () => (
      <DefaultTextInput
        value={'some entered text'}
        contentRight={<DefaultText>ms</DefaultText>}
      />
    ))
    .add('with content and no content padding', () => (
      <DefaultTextInput
        value={'some entered text'}
        contentLeft={<DefaultText>W</DefaultText>}
        contentRight={
          <div
            style={{
              marginRight: '2px',
              width: '32px',
              height: '32px',
              backgroundColor: 'red',
              borderRadius: '4px',
            }}
          />
        }
        disableContentPadding
      />
    ))
    .add('with content and no content padding right', () => (
      <DefaultTextInput
        value={'some entered text'}
        contentLeft={<DefaultText>W</DefaultText>}
        contentRight={
          <div
            style={{
              marginRight: '2px',
              width: '32px',
              height: '32px',
              backgroundColor: 'red',
              borderRadius: '4px',
            }}
          />
        }
        disableContentPaddingRight
      />
    ))
    .add('with content and no content padding left', () => (
      <DefaultTextInput
        value={'some entered text'}
        contentRight={<DefaultText>W</DefaultText>}
        contentLeft={
          <div
            style={{
              marginRight: '2px',
              width: '32px',
              height: '32px',
              backgroundColor: 'red',
              borderRadius: '4px',
            }}
          />
        }
        disableContentPaddingLeft
      />
    ))
    .add('with icons with colors', () => (
      <DefaultTextInput
        value={'some entered text'}
        iconLeft={'coffee'}
        iconRight={'paw'}
        iconColorLeft={'red'}
        iconColorRight={'green'}
      />
    ))
    .add('with icons and background color', () => (
      <DefaultTextInput
        value={'some entered text'}
        iconLeft={'coffee'}
        iconRight={'paw'}
        backgroundColor={defaultColors.errorBgLight}
      />
    ))
    .add('empty', () => <DefaultTextInput value={''} />)
    .add('with placeholder', () => (
      <DefaultTextInput value={''} placeholder={'Enter name'} />
    ))
    .add('with custom theme', () => (
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
    ))
    .add('disabled', () => (
      <DefaultTextInput value={''} placeholder={'Enter name'} disabled={true} />
    ))
    .add('disabled with content', () => (
      <DefaultTextInput
        disabled={true}
        value={'some entered text'}
        contentRight={<DefaultText>ms</DefaultText>}
        iconLeft={'coffee'}
      />
    ));
};