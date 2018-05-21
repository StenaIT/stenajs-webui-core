import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

const StandardButtonComponent = ({
  theme,
  ...buttonProps
}: ButtonProps & WithThemeProps) => (
  <Button
    height={theme.components.StandardButton.height}
    borderRadius={theme.components.StandardButton.borderRadius}
    {...buttonProps}
  />
);

export const StandardButton = compose<
  ButtonProps & WithThemeProps,
  ButtonProps
>(withTheme)(StandardButtonComponent);
