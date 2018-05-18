import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Space } from '../../src/components/ui/layout/Space';
import { UseTheme } from '../../src/components/theme/UseTheme';
import { Row } from '../../src/components/ui/layout/Row';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addSpaceStories = () => {
  storiesOf('Layout/Space', module)
    .add(
      'standard',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with default theme and num=2',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with custom theme',
      withInfo()(() => (
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
      )),
    )
    .add(
      'with custom theme and num=3',
      withInfo()(() => (
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
      )),
    )
    .add(
      'as text separator',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Row>
            <DefaultText>Username:</DefaultText>
            <Space />
            <DefaultText>mattias800</DefaultText>
          </Row>
        </div>
      )),
    );
};
