import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { ExampleTable } from '../../src/examples/table/ExampleTable';

export const addTableStories = () => {
  storiesOf('Table/ExampleTable', module).add(
    'default',
    withInfo()(() => <ExampleTable label={'Submit'} />),
  );
};
