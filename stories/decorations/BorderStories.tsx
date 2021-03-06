import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Border } from '../../src/components/ui/decorations/Border';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addBorderStories = () => {
  storiesOf('Decorators/Border', module)
    .addDecorator(withInfo({ propTablesExclude: [DefaultText] }))
    .add('default', () => (
      <div style={{ display: 'table' }}>
        <Border>
          <DefaultText>This text has a border</DefaultText>
        </Border>
      </div>
    ))
    .add('with color', () => (
      <div style={{ display: 'table' }}>
        <Border color={'#f284ff'}>
          <DefaultText>This text has a border</DefaultText>
        </Border>
      </div>
    ))
    .add('partial border', () => (
      <div style={{ display: 'table' }}>
        <Border left bottom right>
          <DefaultText>This text has no border in the top</DefaultText>
        </Border>
      </div>
    ))
    .add('with borderRadius', () => (
      <div style={{ display: 'table' }}>
        <Border borderRadius={'5px'}>
          <DefaultText>This text has a border</DefaultText>
        </Border>
      </div>
    ))
    .add('with custom border style', () => (
      <div style={{ display: 'table' }}>
        <Border borderRadius={'5px'} borderStyle={'dotted'}>
          <DefaultText>This text has a dotted border</DefaultText>
        </Border>
      </div>
    ))
    .add('with partial borderRadius', () => (
      <div style={{ display: 'table' }}>
        <Border borderTopLeftRadius={'5px'} borderTopRightRadius={'5px'}>
          <DefaultText>This text has a borderRadius in top</DefaultText>
        </Border>
      </div>
    ));
};
