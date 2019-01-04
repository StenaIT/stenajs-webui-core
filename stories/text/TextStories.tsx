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
    .add(
      'standard',
      withInfo()(() => (
        <DefaultText>That is some nice text, right there!</DefaultText>
      )),
    )
    .add(
      'with underline',
      withInfo()(() => (
        <DefaultText underline>
          That is some nice text, right there!
        </DefaultText>
      )),
    )
    .add(
      'with underline on hover',
      withInfo()(() => (
        <DefaultText hoverUnderline>
          That is some nice text, right there!
        </DefaultText>
      )),
    )
    .add(
      'with selection disabled',
      withInfo()(() => (
        <DefaultText disableSelect>This text can not be selected</DefaultText>
      )),
    )
    .add(
      'with font weights',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with custom font weights',
      withInfo()(() => (
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
      )),
    );

  storiesOf('Text/HeaderText', module).add(
    'standard',
    withInfo()(() => (
      <HeaderText>That is some nice text, right there!</HeaderText>
    )),
  );

  storiesOf('Text/LargeText', module)
    .add(
      'standard',
      withInfo()(() => (
        <LargeText>That is some nice text, right there!</LargeText>
      )),
    )
    .add(
      'with custom global theme',
      withInfo()(() => (
        <UseTheme theme={{ components: { LargeText: { fontSize: '22px' } } }}>
          <LargeText>That is some nice text, right there!</LargeText>
        </UseTheme>
      )),
    );

  storiesOf('Text/SmallText', module).add(
    'standard',
    withInfo()(() => (
      <SmallText>That is some nice text, right there!</SmallText>
    )),
  );

  storiesOf('Text/SmallerText', module).add(
    'standard',
    withInfo()(() => (
      <SmallerText>That is some nice text, right there!</SmallerText>
    )),
  );

  storiesOf('Text/TinyText', module).add(
    'standard',
    withInfo()(() => <TinyText>That is some nice text, right there!</TinyText>),
  );
};
