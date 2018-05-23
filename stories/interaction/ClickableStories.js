import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Clickable } from '../../src/components/ui/interaction/Clickable';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addClickableStories = () => {
  storiesOf('Interaction/Clickable', module).add(
    'default',
    withInfo()(() => (
      <Clickable onClick={() => alert('Clicked!')}>
        <DefaultText underline>Click me!</DefaultText>
      </Clickable>
    )),
  ).add(
    'with opacity when mouse hovers over clickable',
    withInfo()(() => (
      <Clickable opacityOnHover onClick={() => alert('Clicked!')}>
        <DefaultText underline>Hover over me!</DefaultText>
      </Clickable>
    )),
  );
};
