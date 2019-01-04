import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Border } from '../../src/components/ui/decorations/Border';
import { Column } from '../../src/components/ui/layout/Column';
import { Space } from '../../src/components/ui/layout/Space';

export const addColumnStories = () => {
  storiesOf('Layout/Column', module)
    .add(
      'standard',
      withInfo({ propTablesExclude: [Space] })(() => (
        <div style={{ display: 'table' }}>
          <Column>
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
          </Column>
        </div>
      )),
    )
    .add(
      'with justifyContent=flex-start',
      withInfo({ propTablesExclude: [Space, Column] })(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <Column
              justifyContent={'flex-start'}
              width={'150px'}
              height={'150px'}
            >
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
            </Column>
          </Border>
        </div>
      )),
    )
    .add(
      'with justifyContent=center',
      withInfo({ propTablesExclude: [Space, Column] })(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <Column justifyContent={'center'} width={'150px'} height={'150px'}>
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
            </Column>
          </Border>
        </div>
      )),
    )
    .add(
      'with justifyContent=flex-end',
      withInfo({ propTablesExclude: [Space, Column] })(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <Column
              justifyContent={'flex-end'}
              width={'150px'}
              height={'150px'}
            >
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
            </Column>
          </Border>
        </div>
      )),
    )
    .add(
      'with alignItems=flex-start',
      withInfo({ propTablesExclude: [Space, Column] })(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <Column alignItems={'flex-start'} width={'150px'} height={'150px'}>
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
            </Column>
          </Border>
        </div>
      )),
    )
    .add(
      'with alignItems=center',
      withInfo({ propTablesExclude: [Space, Column] })(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <Column alignItems={'center'} width={'150px'} height={'150px'}>
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
            </Column>
          </Border>
        </div>
      )),
    )
    .add(
      'with alignItems=flex-end',
      withInfo({ propTablesExclude: [Space, Column] })(() => (
        <div style={{ display: 'table' }}>
          <Border>
            <Column alignItems={'flex-end'} width={'150px'} height={'150px'}>
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
            </Column>
          </Border>
        </div>
      )),
    );
};
