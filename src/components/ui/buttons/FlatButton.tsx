import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { Button, ButtonProps } from './Button';
import { FlatButtonTheme } from './FlatButtonTheme';

type InnerProps = ButtonProps & WithInnerComponentThemeProps<FlatButtonTheme>;

export const FlatButtonComponent: React.FC<InnerProps> = ({
  textColor,
  disabled,
  theme,
  ...buttonProps
}) => (
  <Button
    color={'transparent'}
    disabledColor={'transparent'}
    textColor={
      disabled ? theme.disabledTextColor : textColor || theme.textColor
    }
    disabled={disabled}
    {...buttonProps}
  />
);

export const FlatButton = setDisplayName<ButtonProps>('FlatButton')(
  compose<InnerProps, ButtonProps>(withComponentTheme('FlatButton'))(
    FlatButtonComponent,
  ),
);
