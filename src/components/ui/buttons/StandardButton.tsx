import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { Button, ButtonProps } from './Button';
import { StandardButtonTheme } from './StandardButtonTheme';

type InnerProps = ButtonProps &
  WithInnerComponentThemeProps<StandardButtonTheme>;

export type StandardButtonPropsWithTheme = ButtonProps &
  ComponentThemeProps<'StandardButton'>;

const StandardButtonComponent: React.FC<InnerProps> = ({
  theme,
  ...buttonProps
}) => (
  <Button
    height={theme.height}
    borderRadius={theme.borderRadius}
    {...buttonProps}
  />
);

export const StandardButton = setDisplayName<StandardButtonPropsWithTheme>(
  'StandardButton',
)(
  compose<InnerProps, StandardButtonPropsWithTheme>(
    withComponentTheme('StandardButton'),
  )(StandardButtonComponent),
);
