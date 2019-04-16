import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Drawer } from '../../src/components/ui/drawer';
import { LargeText } from '../../src/components/ui/text';

export const addDrawerStories = () => {
  storiesOf('Drawer', module)
    .add(
      'default',
      withInfo({
        styles: {
          infoBody: {
            paddingLeft: 400,
          },
        },
      })(() => (
        <div style={{ display: 'table', width: '100%' }}>
          <Drawer
            drawerRef={r => r}
            header={
              <div>
                <LargeText>Header</LargeText>
              </div>
            }
            isOpen={true}
            onClick={() => false}
          >
            DrawerContent
          </Drawer>
        </div>
      )),
    )
    .add(
      'with margin top',
      withInfo({
        styles: {
          infoBody: {
            paddingLeft: 400,
          },
        },
      })(() => (
        <div style={{ display: 'table', width: '100%' }}>
          <Drawer
            drawerRef={r => r}
            header={
              <div>
                <LargeText>Header</LargeText>
              </div>
            }
            isOpen={true}
            onClick={() => false}
            marginTop={120}
          >
            DrawerContent
          </Drawer>
        </div>
      )),
    )
    .add(
      'configured header',
      withInfo({
        styles: {
          infoBody: {
            paddingLeft: 400,
          },
        },
      })(() => (
        <div style={{ display: 'table', width: '100%' }}>
          <Drawer
            drawerRef={r => r}
            header={
              <div>
                <LargeText>Header</LargeText>
              </div>
            }
            isOpen={true}
            onClick={() => false}
          >
            DrawerContent
          </Drawer>
        </div>
      )),
    )
    .add(
      'without header',
      withInfo({
        styles: {
          infoBody: {
            paddingLeft: 400,
          },
        },
      })(() => (
        <div style={{ display: 'table', width: '100%' }}>
          <Drawer drawerRef={r => r} isOpen={true} onClick={() => false}>
            DrawerContent
          </Drawer>
        </div>
      )),
    );
};
