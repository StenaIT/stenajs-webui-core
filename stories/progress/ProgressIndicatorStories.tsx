import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ProgressIndicator } from '../../src/components/ui/progress/ProgressIndicator';

export const addProgressIndicatorStories = () => {
  storiesOf('Progress/ProgressIndicator', module)
    .addDecorator(withInfo())
    .add('standard', () => <ProgressIndicator />)
    .add('small', () => <ProgressIndicator small />);
};
