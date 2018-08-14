import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { TableExample } from '../../src/examples/table/TableExample';

export const addTableStories = () => {
  storiesOf('Table/ExampleTable', module).add(
    'default',
    compose(withInfo())(() => <TableExample />),
  );
};
