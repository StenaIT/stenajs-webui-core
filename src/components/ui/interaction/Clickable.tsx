import * as React from 'react';
import { CSSProperties, MouseEventHandler } from 'react';
import './Clickable.css';
import { compose, withHandlers, withState } from 'recompose';

export interface ClickableProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  onDblClick?: MouseEventHandler<HTMLDivElement>;
  tooltip?: string;
  disableOpacityOnClick?: boolean;
  disablePointer?: boolean;
  opacityOnHover?: boolean;
  style?: CSSProperties;
}

export interface MouseIsDown {
  mouseIsDown: boolean;
}

export interface SetMouseIsDown {
  setMouseIsDown: (mouseIsDown: boolean) => void;
}

export interface ClickHandlers {
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseOut: () => void;
}

export type ClickableInnerProps = ClickableProps & MouseIsDown & ClickHandlers;

export class ClickableComponent extends React.Component<ClickableInnerProps> {
  render() {
    const {
      onClick,
      onDblClick,
      tooltip,
      disableOpacityOnClick,
      disablePointer,
      opacityOnHover,
      style,
      onMouseDown,
      onMouseUp,
      mouseIsDown,
      onMouseOut,
    } = this.props;
    const hasClickHandler = ((
      onClick?: React.MouseEventHandler<HTMLDivElement>,
      onDblClick?: React.MouseEventHandler<HTMLDivElement>,
    ): boolean => {
      return !!(onClick || onDblClick);
    })(onClick, onDblClick);
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
        onMouseDown={getMouseCallback(hasClickHandler, onMouseDown)}
        onMouseUp={getMouseCallback(hasClickHandler, onMouseUp)}
        onMouseOut={getMouseCallback(hasClickHandler, onMouseOut)}
      >
        {this.props.children}
      </div>
    );
  }
}

export const Clickable = compose<ClickableInnerProps, ClickableProps>(
  withState('mouseIsDown', 'setMouseIsDown', false),
  withHandlers({
    onMouseDown: ({ setMouseIsDown }: SetMouseIsDown) => () => {
      setMouseIsDown(true);
    },
    onMouseUp: ({ setMouseIsDown }: SetMouseIsDown) => () => {
      setMouseIsDown(false);
    },
    onMouseOut: ({ setMouseIsDown }: SetMouseIsDown) => () => {
      setMouseIsDown(false);
    },
  }),
)(ClickableComponent);

const getMouseCallback = (
  clickable: boolean,
  callback: () => void,
): undefined | (() => void) => {
  if (clickable) {
    return callback;
  }
  return undefined;
};
