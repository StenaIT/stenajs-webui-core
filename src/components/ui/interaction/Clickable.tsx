import * as React from 'react';
import { CSSProperties, MouseEventHandler } from 'react';
import './Clickable.css';

export interface ClickableProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  onDblClick?: MouseEventHandler<HTMLDivElement>;
  tooltip?: string;
  disableOpacityOnClick?: boolean;
  disablePointer?: boolean;
  opacityOnHover?: boolean;
  style?: CSSProperties;
}

export interface ClickableState {
  mouseIsDown?: boolean;
}

export class Clickable extends React.Component<ClickableProps, ClickableState> {
  state: ClickableState = {};

  onMouseDown = () => {
    this.setState(() => ({ mouseIsDown: true }));
  };

  onMouseUp = () => {
    this.setState(() => ({ mouseIsDown: false }));
  };

  render() {
    const {
      onClick,
      onDblClick,
      tooltip,
      disableOpacityOnClick,
      disablePointer,
      opacityOnHover,
      style,
    } = this.props;
    const { mouseIsDown } = this.state;
    const hasClickHandler = !!(onDblClick || onClick);
    const opacity = !disableOpacityOnClick && mouseIsDown ? 0.5 : undefined;
    return (
      <div
        className={opacityOnHover ? 'clickable' : undefined}
        title={tooltip}
        style={{
          cursor: hasClickHandler && !disablePointer ? 'pointer' : undefined,
          display: 'table',
          userSelect: 'none',
          opacity,
          ...style,
        }}
        onClick={onClick}
        onDoubleClick={onDblClick}
        onMouseDown={hasClickHandler ? this.onMouseDown : undefined}
        onMouseUp={hasClickHandler ? this.onMouseUp : undefined}
        onMouseOut={hasClickHandler ? this.onMouseUp : undefined}
      >
        {this.props.children}
      </div>
    );
  }
}
