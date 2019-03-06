import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { Button, ButtonProps, ButtonPropsWithTheme } from './Button';
import { StandardButtonTheme } from './StandardButtonTheme';

type InnerProps = ButtonProps &
  WithInnerComponentThemeProps<StandardButtonTheme>;

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

export const StandardButton = setDisplayName<ButtonPropsWithTheme>(
  'StandardButton',
)(
  compose<InnerProps, ButtonPropsWithTheme>(
    withComponentTheme('StandardButton'),
  )(StandardButtonComponent),
);
