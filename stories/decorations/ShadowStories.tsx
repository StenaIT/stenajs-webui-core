import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Shadow } from '../../src/components/ui/decorations/Shadow';

export const addShadowStories = () => {
  storiesOf('Decorators/Shadow', module).add(
    'default',
    withInfo()(() => (
      <div style={{ display: 'table' }}>
        <Shadow>
          <div style={{ width: '100px', height: '100px' }} />
        </Shadow>
      </div>
    )),
  );
};
