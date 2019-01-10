import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TableExample } from '../../examples/table/TableExample';

export const addTableStories = () => {
  storiesOf('Table/Table', module)
    .addDecorator(withInfo())
    .add('standard', () => <TableExample />);
};
