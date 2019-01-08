import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { GridExample } from '../../examples/grid-hooks/GridExample';
import { GridExampleWithContext } from '../../examples/grid-hooks/GridExampleWithContext';

export const addGridHooksStories = () => {
  storiesOf('Table/GridHooks', module)
    .add('standard', compose(withInfo())(() => <GridExample />))
    .add(
      'with GridHooksTable',
      compose(withInfo())(() => <GridExampleWithContext />),
    );
};
