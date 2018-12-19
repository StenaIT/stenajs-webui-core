import { withState } from '@dump247/storybook-state';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { Background } from '../../src/components/ui/colors';
import {
  defaultNumericTextInputThemeDark,
  defaultTextInputThemeDark,
} from '../../src/components/ui/form/text-input';
import { DefaultTextInput } from '../../src/components/ui/form/text-input/DefaultTextInput';
import { NumericTextInput } from '../../src/components/ui/form/text-input/NumericTextInput';
import { SimpleTextInput } from '../../src/components/ui/form/text-input/SimpleTextInput';
import { Indent, Spacing } from '../../src/components/ui/layout';
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
    )
    .add(
      'disabled',
      withInfo()(() => (
        <SimpleTextInput
          value={''}
          placeholder={'Enter name'}
          disabled={true}
        />
      )),
    );

  storiesOf('Form/TextInput/DefaultTextInput', module)
    .add(
      'standard',
      withInfo()(() => <DefaultTextInput value={'some entered text'} />),
    )
    .add(
      'with dark theme',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with dark theme and icons',
      withInfo()(() => (
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
      )),
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
      'with content right',
      withInfo()(() => (
        <DefaultTextInput
          value={'some entered text'}
          contentRight={<DefaultText>ms</DefaultText>}
        />
      )),
    )
    .add(
      'with content and no content padding',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with content and no content padding right',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with content and no content padding left',
      withInfo()(() => (
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
    )
    .add(
      'disabled',
      withInfo()(() => (
        <DefaultTextInput value={''} placeholder={'Enter name'} disabled={true} />
      )),
    )
  ;

  storiesOf('Form/TextInput/NumericTextInput', module)
    .add(
      'standard',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <NumericTextInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with dark theme',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <div style={{ width: '400px' }}>
          <Background color={'#2e4662'}>
            <Indent num={4}>
              <Spacing num={4}>
                <NumericTextInput
                  value={store.state.value}
                  onChange={value => store.set({ value })}
                  theme={defaultNumericTextInputThemeDark}
                />
              </Spacing>
            </Indent>
          </Background>
        </div>
      )),
    )
    .add(
      'disabled',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <NumericTextInput
          disabled
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'hidden buttons',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <NumericTextInput
          hideButtons
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with left icon',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <NumericTextInput
          iconLeft={'coffee'}
          value={store.state.value}
          min={1}
          max={8}
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with content right',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <NumericTextInput
          value={store.state.value}
          min={1}
          max={8}
          contentRight={
            <DefaultText color={defaultColors.disabledText}>sec</DefaultText>
          }
          onChange={value => store.set({ value })}
        />
      )),
    )
    .add(
      'with min and max',
      compose(
        withState({
          value: 5,
        }),
        withInfo(),
      )(({ store }) => (
        <NumericTextInput
          min={3}
          max={8}
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      )),
    );
};
