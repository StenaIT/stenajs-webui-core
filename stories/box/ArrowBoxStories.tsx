import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ArrowBox } from '../../src/components/ui/box/ArrowBox';
import { Indent } from '../../src/components/ui/layout/Indent';
import { Spacing } from '../../src/components/ui/layout/Spacing';

export const addArrowBoxStories = () => {
  storiesOf('Box/ArrowBox', module)
    .addDecorator(withInfo({ propTablesExclude: [Spacing, Indent] }))
    .add('standard', () => (
      <div style={{ display: 'table' }}>
        <ArrowBox>
          <Spacing>
            <Indent>A nice arrow box.</Indent>
          </Spacing>
        </ArrowBox>
      </div>
    ))
    .add('arrow left', () => (
      <div style={{ display: 'table' }}>
        <ArrowBox direction={'left'}>
          <Spacing>
            <Indent>A nice arrow box.</Indent>
          </Spacing>
        </ArrowBox>
      </div>
    ))
    .add('arrow right', () => (
      <div style={{ display: 'table' }}>
        <ArrowBox direction={'right'}>
          <Spacing>
            <Indent>A nice arrow box.</Indent>
          </Spacing>
        </ArrowBox>
      </div>
    ))
    .add('arrow down', () => (
      <div style={{ display: 'table' }}>
        <ArrowBox direction={'down'}>
          <Spacing>
            <Indent>A nice arrow box.</Indent>
          </Spacing>
        </ArrowBox>
      </div>
    ));
};
