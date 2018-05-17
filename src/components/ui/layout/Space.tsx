import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';

export interface SpaceProps {
  num?: number;
  half?: boolean;
}

export class Space extends React.Component<SpaceProps> {
  render() {
    const { children, num = 1, half = false } = this.props;
    const halfMod = half ? 0.5 : 1.0;
    const size = num * halfMod;
    return (
      <GetTheme>
        {theme => (
          <div
            style={{
              width: `${size * theme.metrics.space}px`,
              height: `${size * theme.metrics.space}px`,
            }}
          >
            {children}
          </div>
        )}
      </GetTheme>
    );
  }
}
