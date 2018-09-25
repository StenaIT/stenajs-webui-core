import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface SpaceProps {
  half?: boolean;
  horizontal?: boolean;
  num?: number;
  vertical?: boolean;
}

export const SpaceComponent: React.SFC<SpaceProps & WithThemeProps> = ({
  children,
  half = false,
  horizontal,
  num = 1,
  theme,
  vertical,
}) => {
  const halfMod = half ? 0.5 : 1.0;
  const size = num * halfMod;
  return (
    <div
      style={{
        width: vertical ? '1px' : `${size * theme.metrics.space}px`,
        height: horizontal ? '1px' : `${size * theme.metrics.space}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Space = setDisplayName<SpaceProps>('Space')(
  compose<SpaceProps & WithThemeProps, SpaceProps>(withTheme)(SpaceComponent),
);
