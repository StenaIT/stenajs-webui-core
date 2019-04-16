import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  ComponentThemeProps,
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../util/enhancers/WithComponentTheme';
import { Button, ButtonProps } from './Button';
import { SmallButtonTheme } from './SmallButtonTheme';

type InnerProps = ButtonProps & WithInnerComponentThemeProps<SmallButtonTheme>;

export type SmallButtonPropsWithTheme = ButtonProps &
  ComponentThemeProps<'SmallButton'>;

const SmallButtonComponent: React.FC<InnerProps> = ({
  theme,
  ...buttonProps
}) => (
  <Button
    height={theme.height}
    borderRadius={theme.borderRadius}
    {...buttonProps}
  />
);

export const SmallButton = setDisplayName<SmallButtonPropsWithTheme>(
  'SmallButton',
)(
  compose<InnerProps, SmallButtonPropsWithTheme>(
    withComponentTheme('SmallButton'),
  )(SmallButtonComponent),
);
