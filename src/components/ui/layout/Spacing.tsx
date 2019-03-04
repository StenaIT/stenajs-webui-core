import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface SpacingProps {
  num?: number;
  half?: boolean;
}

export const SpacingComponent: React.SFC<SpacingProps & WithThemeProps> = ({
  num = 1,
  half = false,
  children,
  theme,
}) => {
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

export const Spacing = setDisplayName<SpacingProps>('Spacing')(
  compose<SpacingProps & WithThemeProps, SpacingProps>(withTheme)(
    SpacingComponent,
  ),
);
