import { css } from 'emotion';
import * as React from 'react';
import { CSSProperties, MouseEventHandler } from 'react';
import { compose, withHandlers, withState } from 'recompose';

export interface ClickableProps {
  /** Callback function called when clicking on click area. */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /** Callback function called when double clicking on click area. */
  onDblClick?: MouseEventHandler<HTMLDivElement>;
  /** Adds a title to the click area. */
  tooltip?: string;
  /** If set, there is no opacity applies when clicking on the click area. */
  disableOpacityOnClick?: boolean;
  /** Mouse does not turn into pointer when hovering over click area. */
  disablePointer?: boolean;
  /** When set, click area receives opacity when mouse hovers over it. */
  opacityOnHover?: boolean;
  /** Custom style on div with click event. */
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

const hoverStyle = css(`
:hover {
    opacity: 0.7;
}
`);

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
    const hasClickHandler = !!(onClick || onDblClick);
    const opacity = !disableOpacityOnClick && mouseIsDown ? 0.5 : undefined;
    return (
      <div
        className={opacityOnHover ? hoverStyle : undefined}
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
