import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';

export interface SpacingProps {
  num?: number;
  half?: boolean;
}

export class Spacing extends React.Component<SpacingProps> {
  render() {
    const { num = 1, half = false, children } = this.props;
    const halfMod = half ? 0.5 : 1;
    const padding = num * halfMod;
    return (
      <GetTheme>
        {theme => (
          <div
            style={{
              paddingBottom: `${padding * theme.metrics.spacing}px`,
              paddingTop: `${padding * theme.metrics.spacing}px`,
            }}
          >
            {children}
          </div>
        )}
      </GetTheme>
    );
  }
}
