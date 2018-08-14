import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
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
  class WithThemeComponent extends React.Component<OuterProps> {
    renderWrappedComponent = (theme: Theme) => {
      return <WrappedComponent {...this.props} theme={theme} />;
    };

    render() {
      return <GetTheme>{this.renderWrappedComponent}</GetTheme>;
    }
  }

  return compose<OuterProps, OuterProps>(setDisplayName('withTheme()'))(
    WithThemeComponent,
  );
};
