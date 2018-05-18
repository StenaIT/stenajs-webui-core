import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { GetTheme } from '../../theme/GetTheme';

export class SmallButton extends React.Component<ButtonProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <Button
            height={theme.components.SmallButton.height}
            borderRadius={theme.components.SmallButton.borderRadius}
            {...this.props}
          />
        )}
      </GetTheme>
    );
  }
}
