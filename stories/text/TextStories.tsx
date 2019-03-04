import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme';
import { DefaultText } from '../../src/components/ui/text/DefaultText';
import { HeaderText } from '../../src/components/ui/text/HeaderText';
import { LargeText } from '../../src/components/ui/text/LargeText';
import { SmallerText } from '../../src/components/ui/text/SmallerText';
import { SmallText } from '../../src/components/ui/text/SmallText';
import { TinyText } from '../../src/components/ui/text/TinyText';

export const addDefaultTextStories = () => {
  storiesOf('Text/DefaultText', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <DefaultText>That is some nice text, right there!</DefaultText>
    ))
    .add('with underline', () => (
      <DefaultText underline>That is some nice text, right there!</DefaultText>
    ))
    .add('with underline on hover', () => (
      <DefaultText hoverUnderline>
        That is some nice text, right there!
      </DefaultText>
    ))
    .add('with selection disabled', () => (
      <DefaultText disableSelect>This text can not be selected</DefaultText>
    ))
    .add('with font weights', () => (
      <div>
        <div>
          <DefaultText weight={'normal'}>This text is normal.</DefaultText>
        </div>
        <div>
          <DefaultText weight={'bold'}>This text is bold.</DefaultText>
        </div>
        <div>
          <DefaultText weight={'light'}>This text is light.</DefaultText>
        </div>
      </div>
    ))
    .add('with custom font weights', () => (
      <UseTheme
        theme={{
          components: {
            DefaultText: {
              fontWeightNormal: 500,
              fontWeightLight: 200,
              fontWeightBold: 900,
            },
          },
        }}
      >
        <div>
          <DefaultText weight={'normal'}>This text is normal.</DefaultText>
        </div>
        <div>
          <DefaultText weight={'bold'}>This text is bold.</DefaultText>
        </div>
        <div>
          <DefaultText weight={'light'}>This text is light.</DefaultText>
        </div>
      </UseTheme>
    ));

  storiesOf('Text/HeaderText', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <HeaderText>That is some nice text, right there!</HeaderText>
    ));

  storiesOf('Text/LargeText', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <LargeText>That is some nice text, right there!</LargeText>
    ))
    .add('with custom global theme', () => (
      <UseTheme theme={{ components: { LargeText: { fontSize: '22px' } } }}>
        <LargeText>That is some nice text, right there!</LargeText>
      </UseTheme>
    ));

  storiesOf('Text/SmallText', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <SmallText>That is some nice text, right there!</SmallText>
    ));

  storiesOf('Text/SmallerText', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <SmallerText>That is some nice text, right there!</SmallerText>
    ));

  storiesOf('Text/TinyText', module)
    .addDecorator(withInfo())
    .add('standard', () => (
      <TinyText>That is some nice text, right there!</TinyText>
    ));
};
