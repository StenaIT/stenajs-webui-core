import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { DefaultText } from '../../src/components/ui/text/DefaultText';
import { SmallText } from '../../src/components/ui/text/SmallText';
import { SmallerText } from '../../src/components/ui/text/SmallerText';
import { TinyText } from '../../src/components/ui/text/TinyText';
import { LargeText } from '../../src/components/ui/text/LargeText';
import { HeaderText } from '../../src/components/ui/text/HeaderText';

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
      'with bold',
      withInfo()(() => (
        <DefaultText bold>That is some nice text, right there!</DefaultText>
      )),
    )
    .add(
      'with selection disabled',
      withInfo()(() => (
        <DefaultText disableSelect>This text can not be selected</DefaultText>
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

  storiesOf('Text/LargeText', module).add(
    'standard',
    withInfo()(() => (
      <LargeText>That is some nice text, right there!</LargeText>
    )),
  );

  storiesOf('Text/HeaderText', module).add(
    'standard',
    withInfo()(() => (
      <HeaderText>That is some nice text, right there!</HeaderText>
    )),
  );
};
