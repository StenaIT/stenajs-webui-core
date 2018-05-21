import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

const SmallButtonComponent = ({
  theme,
  ...buttonProps
}: ButtonProps & WithThemeProps) => (
  <Button
    height={theme.components.SmallButton.height}
    borderRadius={theme.components.SmallButton.borderRadius}
    {...buttonProps}
  />
);

export const SmallButton = compose<ButtonProps & WithThemeProps, ButtonProps>(
  withTheme,
)(SmallButtonComponent);
