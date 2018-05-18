import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { GetTheme } from '../../theme/GetTheme';

export const FlatButton = ({
  textColor,
  disabled,
  ...buttonProps
}: ButtonProps) => (
  <GetTheme>
    {theme => (
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
    )}
  </GetTheme>
);
