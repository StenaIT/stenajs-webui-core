import * as React from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface SeparatorLineProps {
  color?: string;
  height?: string;
  width?: string;
}

type InnerProps = SeparatorLineProps & WithThemeProps;

const SeparatorLineComponent = ({
  color,
  width,
  height,
  theme: {
    components: { SeparatorLine: theme },
  },
}: InnerProps) => (
  <div
    style={{
      height: height || theme.height,
      backgroundColor: color || theme.color,
      width: width || theme.width,
    }}
  />
);

export const SeparatorLine = compose<InnerProps, SeparatorLineProps>(withTheme)(
  SeparatorLineComponent,
);
