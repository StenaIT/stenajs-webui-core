import * as React from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface SpaceProps {
  num?: number;
  half?: boolean;
  children?: {};
}

export const SpaceComponent = ({
  children,
  num = 1,
  half = false,
  theme,
}: SpaceProps & WithThemeProps) => {
  const halfMod = half ? 0.5 : 1.0;
  const size = num * halfMod;
  return (
    <div
      style={{
        width: `${size * theme.metrics.space}px`,
        height: `${size * theme.metrics.space}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Space = compose<SpaceProps & WithThemeProps, SpaceProps>(
  withTheme,
)(SpaceComponent);
