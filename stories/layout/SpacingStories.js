import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { UseTheme } from '../../src/components/theme/UseTheme';
import {DefaultText} from "../../src/components/ui/text/DefaultText";
import {Background} from "../../src/components/ui/colors/Background";
import {Space} from "../../src/components/ui/layout/Space";

export const addSpacingStories = () => {
  storiesOf('Layout/Spacing', module)
    .add(
      'standard',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <div style={{ border: '1px solid black' }}>
            <Spacing>
              <div
                style={{
                  backgroundColor: 'red',
                  width: '50px',
                  height: '20px',
                }}
              />
            </Spacing>
          </div>
        </div>
      )),
    )
    .add(
      'with num=2',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <div style={{ border: '1px solid black' }}>
            <Spacing num={2}>
              <div
                style={{
                  backgroundColor: 'red',
                  width: '50px',
                  height: '20px',
                }}
              />
            </Spacing>
          </div>
        </div>
      )),
    )
    .add(
      'with num=2 and custom theme',
      withInfo({ propTablesExclude: [UseTheme] })(() => (
        <UseTheme theme={{ metrics: { spacing: 20 } }}>
          <div style={{ display: 'table' }}>
            <div style={{ border: '1px solid black' }}>
              <Spacing num={2}>
                <div
                  style={{
                    backgroundColor: 'red',
                    width: '50px',
                    height: '20px',
                  }}
                />
              </Spacing>
            </div>
          </div>
        </UseTheme>
      )),
    );
};
