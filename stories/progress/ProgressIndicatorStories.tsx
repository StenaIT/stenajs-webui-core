import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ProgressIndicator } from '../../src/components/ui/progress/ProgressIndicator';

export const addProgressIndicatorStories = () => {
  storiesOf('Progress/ProgressIndicator', module)
    .add('standard', withInfo()(() => <ProgressIndicator />))
    .add('small', withInfo()(() => <ProgressIndicator small />));
};
