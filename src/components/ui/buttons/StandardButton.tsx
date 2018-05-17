import * as React from 'react';
import { Button, ButtonProps } from './Button';

export class StandardButton extends React.Component<ButtonProps> {
  render() {
    return <Button height={'30px'} borderRadius={'5px'} {...this.props} />;
  }
}
