import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { GridExample } from '../../examples/grid-hooks/GridExample';
import { GridExampleWithContext } from '../../examples/grid-hooks/GridExampleWithContext';

export const addGridHooksStories = () => {
  storiesOf('Table/GridHooks', module)
    .addDecorator(withInfo())
    .add('standard', () => <GridExample />)
    .add('with GridHooksTable', () => <GridExampleWithContext />);
};
