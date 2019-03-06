import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
import {
  faBicycle,
  faClock,
  faCog,
  faShip,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../../src/components/ui/icon';
import { Indent, Row, Space } from '../../src/components/ui/layout';
import { DefaultText } from '../../src/components/ui/text';

library.add(
  faCheckCircle,
  faCircle,
  faBicycle,
  faClock,
  faCog,
  faShip,
  faSpinner,
);

export const addIconStories = () => {
  storiesOf('Icon', module)
    .addDecorator(withInfo())
    .add('default', () => <Icon name={'cog'} />)
    .add('with color', () => <Icon name={'cog'} color={'#abcdef'} />)
    .add('with spin', () => <Icon name={'spinner'} spin={true} />)
    .add('with pulse', () => <Icon name={'spinner'} pulse={true} />)
    .add('horizontal flip', () => (
      <>
        <Row>
          <DefaultText>Normal</DefaultText>
          <Space />
          <Icon name={'bicycle'} />
        </Row>
        <Row>
          <DefaultText>Flipped</DefaultText> <Space />
          <Icon name={'bicycle'} flip={'horizontal'} />
        </Row>
      </>
    ))
    .add('vertical flip', () => (
      <>
        <Row>
          <DefaultText>Normal</DefaultText>
          <Space />
          <Icon name={'bicycle'} />
        </Row>
        <Row>
          <DefaultText>Flipped</DefaultText> <Space />
          <Icon name={'bicycle'} flip={'vertical'} />
        </Row>
      </>
    ))
    .add('with rotation', () => (
      <Row>
        <Indent>
          <DefaultText>90</DefaultText>
          <Space />
          <Icon name={'ship'} rotation={90} />
        </Indent>
        <Indent>
          <DefaultText>180</DefaultText> <Space />
          <Icon name={'ship'} rotation={180} />
        </Indent>
        <Indent>
          <DefaultText>270</DefaultText> <Space />
          <Icon name={'ship'} rotation={270} />
        </Indent>
      </Row>
    ))
    .add('with transform', () => (
      <Icon name={'bicycle'} transform={{ flipX: true, rotate: 90 }} />
    ));
};
