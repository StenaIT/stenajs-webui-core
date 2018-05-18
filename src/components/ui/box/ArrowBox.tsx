import * as React from 'react';
import './ArrowBox.css';

export type ArrowDirection = 'up' | 'down' | 'left' | 'right';

export interface ArrowBoxProps {
  direction?: ArrowDirection;
}

export class ArrowBox extends React.Component<ArrowBoxProps> {
  render() {
    const { direction = 'up' } = this.props;
    return (
      <div className={`arrow_box ${direction}`}>{this.props.children}</div>
    );
  }
}
