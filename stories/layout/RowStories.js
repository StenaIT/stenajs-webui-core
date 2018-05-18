import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Row } from '../../src/components/ui/layout/Row';
import { Space } from '../../src/components/ui/layout/Space';
import { Background } from '../../src/components/ui/colors/Background';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addRowStories = () => {
  storiesOf('Layout/Row', module)
    .add(
      'standard',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Row>
            <div
              style={{
                backgroundColor: 'red',
                width: '50px',
                height: '20px',
              }}
            />
            <Space />
            <div
              style={{
                backgroundColor: 'red',
                width: '50px',
                height: '20px',
              }}
            />
            <Space />
            <div
              style={{
                backgroundColor: 'red',
                width: '50px',
                height: '20px',
              }}
            />
          </Row>
        </div>
      )),
    )
    .add(
      'with justifyContent',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Background color={'#eeeeee'}>
            <Row justifyContent={'center'} width={'200px'}>
              <DefaultText>I am centered!</DefaultText>
            </Row>
          </Background>
          <Space />
          <Background color={'#f0f0f0'}>
            <Row justifyContent={'flex-start'} width={'200px'}>
              <DefaultText>I am left!</DefaultText>
            </Row>
          </Background>
          <Space />
          <Background color={'#e0e0e0'}>
            <Row justifyContent={'flex-end'} width={'200px'}>
              <DefaultText>I am right!</DefaultText>
            </Row>
          </Background>
          <Space />
          <Background color={'#e0e0e0'}>
            <Row justifyContent={'space-between'} width={'200px'}>
              <DefaultText>I am left!</DefaultText>
              <DefaultText>I am right!</DefaultText>
            </Row>
          </Background>
        </div>
      )),
    )
    .add(
      'with alignItems',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <Background color={'#eeeeee'}>
            <Row
              justifyContent={'center'}
              alignItems={'center'}
              width={'200px'}
              height={'100px'}
            >
              <DefaultText>I am centered!</DefaultText>
            </Row>
          </Background>
          <Space />
          <Background color={'#f0f0f0'}>
            <Row
              justifyContent={'center'}
              alignItems={'flex-start'}
              width={'200px'}
              height={'100px'}
            >
              <DefaultText>I am up!</DefaultText>
            </Row>
          </Background>
          <Space />
          <Background color={'#e0e0e0'}>
            <Row
              justifyContent={'center'}
              alignItems={'flex-end'}
              width={'200px'}
              height={'100px'}
            >
              <DefaultText>I am down!</DefaultText>
            </Row>
          </Background>
        </div>
      )),
    );
};
