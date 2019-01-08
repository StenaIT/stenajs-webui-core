import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { compose } from 'recompose';
import { TableExample } from '../../examples/table/TableExample';

export const addTableStories = () => {
  storiesOf('Table/Table', module).add(
    'standard',
    compose(withInfo())(() => <TableExample />),
  );
};
