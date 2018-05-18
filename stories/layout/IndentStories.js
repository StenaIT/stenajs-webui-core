import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Indent } from '../../src/components/ui/layout/Indent';

export const addIndentStories = () => {
  storiesOf('Layout/Indent', module)
    .add(
      'standard',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <div style={{ border: '1px solid black' }}>
            <Indent>
              <div
                style={{
                  backgroundColor: 'red',
                  width: '50px',
                  height: '20px',
                }}
              />
            </Indent>
          </div>
        </div>
      )),
    )
    .add(
      'with num=2',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <div style={{ border: '1px solid black' }}>
            <Indent num={2}>
              <div
                style={{
                  backgroundColor: 'red',
                  width: '50px',
                  height: '20px',
                }}
              />
            </Indent>
          </div>
        </div>
      )),
    );
};
