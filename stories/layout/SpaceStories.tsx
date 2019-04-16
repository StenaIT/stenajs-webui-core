import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { Column } from '../../src/components/ui/layout/Column';
import { Row } from '../../src/components/ui/layout/Row';
import { Space } from '../../src/components/ui/layout/Space';
import { DefaultText } from '../../src/components/ui/text/DefaultText';
import {stenaWebUiCoreStyles} from '../../src/util/theme/stylesheet';

export const addSpaceStories = () => {
  storiesOf('Layout/Space', module)
    .addDecorator(withInfo({
      styles: stenaWebUiCoreStyles,
      inline: true,
    }))
    .add('standard', () => (
      <div style={{ display: 'table' }}>
        <Row>
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
          <Space />
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
        </Row>
      </div>
    ))
    .add('with default theme and num=2', () => (
      <div style={{ display: 'table' }}>
        <Row>
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
          <Space num={2} />
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
        </Row>
      </div>
    ))
    .add('with custom theme', () => (
      <div style={{ display: 'table' }}>
        <Row>
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
          <UseTheme theme={{ metrics: { space: 20 } }}>
            <Space />
          </UseTheme>
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
        </Row>
      </div>
    ))
    .add('with custom theme and num=3', () => (
      <div style={{ display: 'table' }}>
        <Row>
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
          <UseTheme theme={{ metrics: { space: 20 } }}>
            <Space num={3} />
          </UseTheme>
          <div
            style={{ backgroundColor: 'red', width: '50px', height: '20px' }}
          />
        </Row>
      </div>
    ))
    .add('as text separator', () => (
      <div style={{ display: 'table' }}>
        <Row>
          <DefaultText>Username:</DefaultText>
          <Space />
          <DefaultText>mattias800</DefaultText>
        </Row>
      </div>
    ))
    .add('with horizontal', () => (
      <div style={{ display: 'table' }}>
        <Row>
          <DefaultText>Username:</DefaultText>
          <Space horizontal={true} />
          <DefaultText>mattias800</DefaultText>
        </Row>
      </div>
    ))
    .add('with vertical', () => (
      <div style={{ display: 'table' }}>
        <Column>
          <DefaultText>Username:</DefaultText>
          <Space />
          <DefaultText>mattias800</DefaultText>
        </Column>
      </div>
    ));
};
