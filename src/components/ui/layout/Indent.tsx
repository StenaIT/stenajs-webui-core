import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';

export interface IndentProps {
  num?: number;
  half?: boolean;
}

export class Indent extends React.Component<IndentProps> {
  render() {
    const { num = 1, children, half } = this.props;

    const halfCoeff = half ? 0.5 : 1;
    const size = num * halfCoeff;

    return (
      <GetTheme>
        {theme => (
          <div
            style={{
              marginLeft: `${size * theme.metrics.indent}px`,
              marginRight: `${size * theme.metrics.indent}px`,
            }}
          >
            {children}
          </div>
        )}
      </GetTheme>
    );
  }
}
