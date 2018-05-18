import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { ArrowBox } from '../../src/components/ui/box/ArrowBox';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { Indent } from '../../src/components/ui/layout/Indent';

export const addArrowBoxStories = () => {
  storiesOf('Box/ArrowBox', module)
    .add(
      'standard',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <ArrowBox>
            <Spacing>
              <Indent>A nice arrow box.</Indent>
            </Spacing>
          </ArrowBox>
        </div>
      )),
    )
    .add(
      'arrow left',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <ArrowBox direction={'left'}>
            <Spacing>
              <Indent>A nice arrow box.</Indent>
            </Spacing>
          </ArrowBox>
        </div>
      )),
    )
    .add(
      'arrow right',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <ArrowBox direction={'right'}>
            <Spacing>
              <Indent>A nice arrow box.</Indent>
            </Spacing>
          </ArrowBox>
        </div>
      )),
    )
    .add(
      'arrow down',
      withInfo()(() => (
        <div style={{ display: 'table' }}>
          <ArrowBox direction={'down'}>
            <Spacing>
              <Indent>A nice arrow box.</Indent>
            </Spacing>
          </ArrowBox>
        </div>
      )),
    );
};
