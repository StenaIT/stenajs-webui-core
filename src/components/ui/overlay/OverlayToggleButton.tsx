import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { ButtonProps } from '../buttons/Button';
import { StandardButton } from '../buttons/StandardButton';
import { Overlay } from './Overlay';
import { Clickable } from '../interaction/Clickable';

export type ChildrenFunction = (args: OverlayToggleArgs) => JSX.Element;

export interface OverlayToggleButtonProps extends ButtonProps {
  default?: boolean;
  children?: JSX.Element | ChildrenFunction;
  renderButton?: JSX.Element;
  detachOverlay?: boolean;
  backgroundOpacity?: number;
}

interface StateProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface HandlersProps {
  close: () => void;
  onClick: (open: boolean) => void;
}

type InnerProps = OverlayToggleButtonProps & StateProps & HandlersProps;

export interface OverlayToggleArgs {
  close: () => void;
}

class OverlayToggleButtonComponent extends React.Component<InnerProps> {
  renderChildren() {
    const { children, close } = this.props;
    if (typeof children === 'function') {
      return (children as ChildrenFunction)({ close });
    }
    return children;
  }

  render() {
    const {
      renderButton,
      open,
      onClick,
      close,
      detachOverlay,
      backgroundOpacity,
    } = this.props;

    return (
      <>
        {renderButton ? (
          <Clickable onClick={onClick}>{renderButton}</Clickable>
        ) : (
          <StandardButton onClick={onClick} {...this.props} />
        )}

        {open &&
          !detachOverlay && (
            <Overlay
              backgroundOpacity={backgroundOpacity}
              onClickOutside={close}
            >
              {this.renderChildren()}
            </Overlay>
          )}
        {open &&
          detachOverlay && (
            <>
              <Overlay
                backgroundOpacity={backgroundOpacity}
                onClickOutside={close}
              />
              {this.renderChildren()}
            </>
          )}
      </>
    );
  }
}

const openState = withState('open', 'setOpen', false);

const clickHandlers = withHandlers({
  onClick: ({ setOpen, open }: StateProps) => () => {
    setOpen(!open);
  },
  close: ({ setOpen }: StateProps) => () => {
    setOpen(false);
  },
});

export const OverlayToggleButton = compose<
  InnerProps,
  OverlayToggleButtonProps
>(openState, clickHandlers)(OverlayToggleButtonComponent);
