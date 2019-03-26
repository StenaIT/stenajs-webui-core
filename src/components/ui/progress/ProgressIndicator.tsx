import * as React from 'react';
import { Progress } from './Progress';

const Spinner = require('react-spinkit');

export interface ProgressIndicatorProps {
  /** Use small indicator. */
  small?: boolean;
  /** The color of the indicator. */
  color?: string;
}

export class ProgressIndicator extends React.Component<ProgressIndicatorProps> {
  render() {
    const { small = false, color } = this.props;

    if (small) {
      return <Progress size={22} trackColor={color} />;
    }

    return <Spinner name="ball-scale-ripple" fadeIn={'none'} />;
  }
}
