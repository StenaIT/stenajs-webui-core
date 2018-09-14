import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';
import { Button, ButtonProps } from './Button';

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

export const SmallButton = setDisplayName<ButtonProps>('SmallButton')(
  compose<ButtonProps & WithThemeProps, ButtonProps>(withTheme)(
    SmallButtonComponent,
  ),
);
