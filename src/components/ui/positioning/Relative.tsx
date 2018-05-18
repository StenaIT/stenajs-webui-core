import * as React from 'react';

export interface RelativeProps {
  border?: boolean;
  width?: string;
  height?: string;
}

export class Relative extends React.Component<RelativeProps> {
  render() {
    const { border, children, width, height } = this.props;
    return (
      <div
        style={{
          position: 'relative',
          border: border ? '1px solid black' : '',
          width,
          height,
        }}
      >
        {children}
      </div>
    );
  }
}
