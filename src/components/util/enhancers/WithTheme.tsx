import * as React from 'react';
import { Theme } from '../../..';
import { GetTheme } from '../../theme/GetTheme';

export interface WithThemeProps {
  theme: Theme;
}

export const withTheme = <
  OuterProps,
  WrappedComponentProps extends WithThemeProps,
  State = {}
>(
  WrappedComponent:
    | React.ComponentClass<WrappedComponentProps>
    | React.StatelessComponent<WrappedComponentProps>,
): React.ComponentClass<OuterProps> | React.StatelessComponent<OuterProps> => {
  return class extends React.Component<OuterProps> {
    renderChildren = (theme: Theme) => {
      return <WrappedComponent {...this.props} theme={theme} />;
    };

    render() {
      return <GetTheme>{this.renderChildren}</GetTheme>;
    }
  };
};
