import * as React from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface SpacingProps {
  num?: number;
  half?: boolean;
  children: {};
}

const SpacingComponent = ({
  num = 1,
  half = false,
  children,
  theme,
}: SpacingProps & WithThemeProps) => {
  const halfMod = half ? 0.5 : 1;
  const padding = num * halfMod;
  return (
    <div
      style={{
        paddingBottom: `${padding * theme.metrics.spacing}px`,
        paddingTop: `${padding * theme.metrics.spacing}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Spacing = compose<SpacingProps & WithThemeProps, SpacingProps>(
  withTheme,
)(SpacingComponent);
