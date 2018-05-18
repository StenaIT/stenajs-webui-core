import * as React from 'react';

export interface AbsoluteProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  zIndex?: 'auto' | number;
  style?: React.CSSProperties;
  border?: boolean;
  width?: string;
  height?: string;
}

export class Absolute extends React.Component<AbsoluteProps> {
  render() {
    const {
      children,
      style,
      border,
      width,
      height,
      ...styleProps
    } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          border: border ? '1px solid black' : '',
          width,
          height,
          ...style,
          ...styleProps,
        }}
      >
        {children}
      </div>
    );
  }
}
