import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { GridExample } from '../../examples/grid-hooks/GridExample';

export const addGridHooksStories = () => {
  storiesOf('Table/GridHooks', module).add(
    'default',
    compose(withInfo())(() => <GridExample />),
  );
};
