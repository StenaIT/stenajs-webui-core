import * as React from 'react';
import { ArrowWrapper } from './ArrowBoxStyle';

export type ArrowDirection = 'up' | 'down' | 'left' | 'right';

export interface ArrowBoxProps {
  /** The direction of the arrow. */
  direction?: ArrowDirection;
}

export class ArrowBox extends React.Component<ArrowBoxProps> {
  render() {
    const { direction = 'up' } = this.props;
    console.log('________', {
      type: Object as () => ArrowBoxProps
    });
    return (
      <ArrowWrapper>
        <div className={`arrow_box ${direction}`}>{this.props.children}</div>
      </ArrowWrapper>
    );
  }
}
