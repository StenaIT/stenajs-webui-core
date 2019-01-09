import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Indent } from '../../src/components/ui/layout/Indent';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { BoatProgressIndicator } from '../../src/components/ui/progress/BoatProgressIndicator';

export const addBoatProgressIndicatorStories = () => {
  storiesOf('Progress/BoatProgressIndicator', module)
    .addDecorator(withInfo({ propTablesExclude: [Spacing, Indent] }))
    .add('standard', () => (
      <div style={{ backgroundColor: '#cccccc', display: 'table' }}>
        <Spacing>
          <Indent>
            <BoatProgressIndicator />
          </Indent>
        </Spacing>
      </div>
    ));
};
