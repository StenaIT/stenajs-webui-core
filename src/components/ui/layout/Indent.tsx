import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface IndentProps {
  num?: number;
  half?: boolean;
}

export const IndentComponent: React.FC<IndentProps & WithThemeProps> = ({
  num = 1,
  children,
  half,
  theme,
}) => {
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

export const Indent = setDisplayName<IndentProps>('Indent')(
  compose<IndentProps & WithThemeProps, IndentProps>(withTheme)(
    IndentComponent,
  ),
);
