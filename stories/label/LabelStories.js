import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Label } from '../../src/components/ui/label/Label';
import { DefaultText } from '../../src/components/ui/text/DefaultText';
import { HeaderText } from '../../src/components/ui/text/HeaderText';

export const addLabelStories = () => {
  storiesOf('Label/Label', module)
    .add(
      'default',
      withInfo()(() => (
        <Label label={<DefaultText>label</DefaultText>}>
          <div>Text under label!</div>
        </Label>
      )),
    )
    .add(
      'with left top',
      withInfo()(() => (
        <Label color={'#a2a2a2'} label={<HeaderText>big label</HeaderText>} position={'left-top'} underline={true}>
          <div>Text next to label!</div>
          <div>Second text next to label!</div>
          <div>Third text next to label!</div>
        </Label>
      )),
    )
    .add(
      'with left bottom',
      withInfo()(() => (
        <Label label={<DefaultText>label</DefaultText>} num={2} position={'left-bottom'}>
          <div>Text next to label!</div>
          <div>Second text next to label!</div>
          <div>Third text next to label!</div>
        </Label>
      )),
    )
    .add(
      'with top right',
      withInfo()(() => (
        <Label color={'#a2a2a2'} label={<HeaderText>big label</HeaderText>} num={3} position={'top-right'}>
          <div>Text under label!</div>
        </Label>
      )),
    );
};
