import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BoxShadow } from '../../src/components/ui/decorations/BoxShadow';

export const addBoxShadowStories = () => {
  storiesOf('Decorators/BoxShadow', module)
    .addDecorator(withInfo())
    .add('default', () => (
      <div style={{ display: 'table' }}>
        <BoxShadow>
          <div style={{ width: '100px', height: '100px' }} />
        </BoxShadow>
      </div>
    ));
};
