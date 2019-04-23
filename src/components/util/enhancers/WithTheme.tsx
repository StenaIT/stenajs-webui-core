import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { Theme } from '../../../themes/Theme';
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
  class WithThemeComponent extends React.Component<WrappedComponentProps> {
    renderWrappedComponent = (theme: Theme) => {
      return <WrappedComponent {...this.props} theme={theme} />;
    };

    render() {
      return <GetTheme>{this.renderWrappedComponent}</GetTheme>;
    }
  }

  return compose<WrappedComponentProps, OuterProps>(
    setDisplayName('withTheme()'),
  )(WithThemeComponent);
};
