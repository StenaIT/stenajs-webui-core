import * as React from 'react';

export interface KeyListenerProps {
  keyCode?: number | undefined;
  onKey?: () => void;
  disablePreventDefault?: boolean;
  disableStopPropagation?: boolean;
}

export class KeyListener extends React.Component<KeyListenerProps> {
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    const {
      keyCode,
      onKey,
      disablePreventDefault,
      disableStopPropagation,
    } = this.props;

    if (e.keyCode === keyCode && onKey) {
      if (!disablePreventDefault) {
        e.preventDefault();
      }
      if (!disableStopPropagation) {
        e.stopPropagation();
      }
      onKey();
    }
  };

  render() {
    return <div onKeyDown={this.onKeyDown}>{this.props.children}</div>;
  }
}
