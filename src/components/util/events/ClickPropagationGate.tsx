import * as React from 'react';

export interface ClickPropagationGateProps {
  disabled?: boolean;
}

export class ClickPropagationGate extends React.Component<
  ClickPropagationGateProps
> {
  onClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    const { disabled } = this.props;
    return (
      <div onClick={disabled ? undefined : this.onClick}>
        {this.props.children}
      </div>
    );
  }
}
