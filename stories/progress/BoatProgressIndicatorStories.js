import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { BoatProgressIndicator } from '../../src/components/ui/progress/BoatProgressIndicator';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { Indent } from '../../src/components/ui/layout/Indent';

export const addBoatProgressIndicatorStories = () => {
  storiesOf('Progress/BoatProgressIndicator', module).add(
    'standard',
    withInfo({ propTablesExclude: [Spacing, Indent] })(() => (
      <div style={{ backgroundColor: '#cccccc', display: 'table' }}>
        <Spacing>
          <Indent>
            <BoatProgressIndicator />
          </Indent>
        </Spacing>
      </div>
    )),
  );
};
