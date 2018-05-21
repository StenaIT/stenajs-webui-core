import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

const FlatButtonComponent = ({
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

export const FlatButton = compose<ButtonProps & WithThemeProps, ButtonProps>(
  withTheme,
)(FlatButtonComponent);
