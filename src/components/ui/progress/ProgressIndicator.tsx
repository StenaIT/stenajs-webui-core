import * as React from 'react';
import { Progress } from './Progress';

const Spinner = require('react-spinkit');

export interface ProgressIndicatorProps {
  /** Use small indicator. */
  small?: boolean;
  /** The color of the indicator. */
  color?: string;
  /** The color of the indicator background. */
  backgroundColor?: string;
}

export class ProgressIndicator extends React.Component<ProgressIndicatorProps> {
  render() {
    const { small = false, color, backgroundColor } = this.props;

    if (small) {
      return (
        <Progress
          size={18}
          trackColor={color}
          backgroundColor={backgroundColor}
        />
      );
    }

    return <Spinner name="ball-scale-ripple" fadeIn={'none'} />;
  }
}
