import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { GetTheme } from '../../theme/GetTheme';

export class StandardButton extends React.Component<ButtonProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <Button
            height={theme.components.StandardButton.height}
            borderRadius={theme.components.StandardButton.borderRadius}
            {...this.props}
          />
        )}
      </GetTheme>
    );
  }
}
