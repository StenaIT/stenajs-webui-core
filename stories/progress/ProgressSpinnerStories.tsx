import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Progress } from '../../src/components/ui/progress/Progress';

export const addProgressSpinnersStories = () => {
  storiesOf('Progress/ProgressSpinners', module)
    .addDecorator(withInfo())
    .add('standard', () => <Progress />)
    .add('track color', () => <Progress trackColor={'red'} />)
    .add('background + track color', () => (
      <div style={{ display: 'table', padding: 50, background: 'black' }}>
        <Progress backgroundColor={'#000'} trackColor={'#fff'} />
      </div>
    ))
    .add('size', () => <Progress size={100} />)
    .add('style', () => <Progress style={{ marginLeft: 10, marginTop: 60 }} />);
};
/*
        opacity = 1,
        size = 20,
        width,
        spinnerProps,
        style = {}
 */
