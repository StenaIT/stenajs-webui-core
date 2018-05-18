import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Border } from '../../src/components/ui/decorations/Border';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addBorderStories = () => {
  storiesOf('Decorators/Border', module)
    .add(
      'default',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <DefaultText>This text has a border</DefaultText>
          </Border>
        </div>
      )),
    )
    .add(
      'with color',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Border color={'#f284ff'}>
            <DefaultText>This text has a border</DefaultText>
          </Border>
        </div>
      )),
    )
    .add(
      'partial border',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Border left bottom right>
            <DefaultText>This text has no border in the top</DefaultText>
          </Border>
        </div>
      )),
    )
    .add(
      'with borderRadius',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Border borderRadius={'5px'}>
            <DefaultText>This text has a border</DefaultText>
          </Border>
        </div>
      )),
    )
    .add(
      'with partial borderRadius',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Border borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'}>
            <DefaultText>This text has a borderRadius in top</DefaultText>
          </Border>
        </div>
      )),
    );
};
