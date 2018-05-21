import * as React from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface IndentProps {
  num?: number;
  half?: boolean;
  children?: {};
}

export const IndentComponent = ({
  num = 1,
  children,
  half,
  theme,
}: IndentProps & WithThemeProps) => {
  const halfCoeff = half ? 0.5 : 1;
  const size = num * halfCoeff;

  return (
    <div
      style={{
        marginLeft: `${size * theme.metrics.indent}px`,
        marginRight: `${size * theme.metrics.indent}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Indent = compose<IndentProps & WithThemeProps, IndentProps>(
  withTheme,
)(IndentComponent);
