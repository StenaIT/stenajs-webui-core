import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Clickable } from '../../src/components/ui/interaction/Clickable';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addClickableStories = () => {
  storiesOf('Interaction/Clickable', module)
    .addDecorator(withInfo())
    .add('default', () => (
      <Clickable onClick={() => alert('Clicked!')}>
        <DefaultText underline>Click me!</DefaultText>
      </Clickable>
    ))
    .add('with opacity when mouse hovers over clickable', () => (
      <Clickable opacityOnHover onClick={() => alert('Clicked!')}>
        <DefaultText underline>Hover over me!</DefaultText>
      </Clickable>
    ))
    .add('with double click', () => (
      <Clickable onDblClick={() => alert('Double clicked!')}>
        <DefaultText underline>Double click me!</DefaultText>
      </Clickable>
    ))
    .add('with no pointer as mouse cursor', () => (
      <Clickable disablePointer onClick={() => alert('Clicked!')}>
        <DefaultText underline>Click me!</DefaultText>
      </Clickable>
    ))
    .add('with no opacity effect when clicking', () => (
      <Clickable disableOpacityOnClick onClick={() => alert('Clicked!')}>
        <DefaultText underline>Click me!</DefaultText>
      </Clickable>
    ))
    .add('with tooltip', () => (
      <Clickable
        tooltip={'This is some nice information'}
        onClick={() => alert('Clicked!')}
      >
        <DefaultText underline>Hover me a second</DefaultText>
      </Clickable>
    ));
};
