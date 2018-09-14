import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';
import { Button, ButtonProps } from './Button';

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

export const StandardButton = setDisplayName<ButtonProps>('StandardButton')(
  compose<ButtonProps & WithThemeProps, ButtonProps>(withTheme)(
    StandardButtonComponent,
  ),
);
