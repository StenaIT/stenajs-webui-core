import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TextColor } from '../../src/components/ui/colors';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addTextColorStories = () => {
  storiesOf('Colors/TextColor', module)
    .add(
      'standard',
      withInfo()(() => (
        <TextColor color={'blue'}>
          <DefaultText>That is some blue text, right there!</DefaultText>
        </TextColor>
      )),
    )
    .add(
      'nested text colors',
      withInfo()(() => (
        <TextColor color={'blue'}>
          <DefaultText>That is some blue text, right there!</DefaultText>
          <TextColor color={'red'}>
            <DefaultText>This is an error message</DefaultText>
          </TextColor>
          <DefaultText>And some more text.</DefaultText>
        </TextColor>
      )),
    );
};
