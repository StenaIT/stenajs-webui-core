import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';
import { Button, ButtonProps } from './Button';

export const FlatButtonComponent = ({
  textColor,
  disabled,
  theme,
  ...buttonProps
}: ButtonProps & WithThemeProps) => (
  <Button
    color={'transparent'}
    disabledColor={'transparent'}
    textColor={
      disabled
        ? theme.components.FlatButton.disabledTextColor
        : textColor || theme.components.FlatButton.textColor
    }
    disabled={disabled}
    {...buttonProps}
  />
);

export const FlatButton = setDisplayName<ButtonProps>('FlatButton')(
  compose<ButtonProps & WithThemeProps, ButtonProps>(withTheme)(
    FlatButtonComponent,
  ),
);
