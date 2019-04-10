import {
  faBicycle,
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

export const addIconStories = () => {
  storiesOf('Icon', module)
    .addDecorator(withInfo())
    .add('default', () => <Icon name={faCog} />)
    .add('with color', () => <Icon name={faCog} color={'#abcdef'} />)
    .add('with spin', () => <Icon name={faSpinner} spin={true} />)
    .add('with pulse', () => <Icon name={faSpinner} pulse={true} />)
    .add('horizontal flip', () => (
      <>
        <Row>
          <DefaultText>Normal</DefaultText>
          <Space />
          <Icon name={faBicycle} />
        </Row>
        <Row>
          <DefaultText>Flipped</DefaultText> <Space />
          <Icon name={faBicycle} flip={'horizontal'} />
        </Row>
      </>
    ))
    .add('vertical flip', () => (
      <>
        <Row>
          <DefaultText>Normal</DefaultText>
          <Space />
          <Icon name={faBicycle} />
        </Row>
        <Row>
          <DefaultText>Flipped</DefaultText> <Space />
          <Icon name={faBicycle} flip={'vertical'} />
        </Row>
      </>
    ))
    .add('with rotation', () => (
      <Row>
        <Indent>
          <DefaultText>90</DefaultText>
          <Space />
          <Icon name={faShip} rotation={90} />
        </Indent>
        <Indent>
          <DefaultText>180</DefaultText> <Space />
          <Icon name={faShip} rotation={180} />
        </Indent>
        <Indent>
          <DefaultText>270</DefaultText> <Space />
          <Icon name={faShip} rotation={270} />
        </Indent>
      </Row>
    ))
    .add('with transform', () => (
      <Icon name={faBicycle} transform={{ flipX: true, rotate: 90 }} />
    ));
};
