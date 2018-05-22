import * as React from 'react';

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
      return <Spinner name="circle" fadeIn={'none'} color={color} />;
    }

    return <Spinner name="ball-scale-ripple" fadeIn={'none'} />;
  }
}
