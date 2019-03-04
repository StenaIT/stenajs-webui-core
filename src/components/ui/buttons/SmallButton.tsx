import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { Button, ButtonProps, ButtonPropsWithTheme } from './Button';
import { SmallButtonTheme } from './SmallButtonTheme';

type InnerProps = ButtonProps & WithInnerComponentThemeProps<SmallButtonTheme>;

const SmallButtonComponent: React.SFC<InnerProps> = ({
  theme,
  ...buttonProps
}) => (
  <Button
    height={theme.height}
    borderRadius={theme.borderRadius}
    {...buttonProps}
  />
);

export const SmallButton = setDisplayName<ButtonPropsWithTheme>('SmallButton')(
  compose<InnerProps, ButtonPropsWithTheme>(withComponentTheme('SmallButton'))(
    SmallButtonComponent,
  ),
);
