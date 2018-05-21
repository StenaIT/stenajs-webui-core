import * as React from 'react';
import { Theme } from '../../..';
import { GetTheme } from '../../theme/GetTheme';

export interface WithThemeProps {
  theme: Theme;
}

export const withTheme = <
  OuterProps,
  WrappedComponentProps extends WithThemeProps
>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>,
): React.ComponentType<OuterProps> => {
  return class extends React.Component<OuterProps> {
    renderChildren = (theme: Theme) => {
      console.log('withTheme');
      console.log('theme', theme);
      return <WrappedComponent {...this.props} theme={theme} />;
    };

    render() {
      return <GetTheme>{this.renderChildren}</GetTheme>;
    }
  };
};
