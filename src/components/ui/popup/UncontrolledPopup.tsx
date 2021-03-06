import { Color } from 'csstype';
import { Modifiers, Placement } from 'popper.js';
import * as React from 'react';
import {
  compose,
  StateHandlerMap,
  withProps,
  withStateHandlers,
} from 'recompose';
import { Omit } from '../../../types';
import { PopperInterface, Popup, PopupProps } from './Popup';

export interface UncontrolledPopupProps {
  /** Background color of popup */
  backgroundColor?: Color;
  /** Content to be rendered in popup */
  children: React.ReactNode | PopupChildrenFunction;
  /** An object containing custom settings for the
   * [Popper.js modifiers]{@link https://popper.js.org/popper-documentation.html#modifiers}
   */
  modifiers?: Modifiers;
  /** Placement of popup related to referenceChildren */
  placement?: Placement;
  /** The Popper imported from react-popper */
  Popper: PopperInterface;
  /** The element that triggers the popup */
  referenceChildren: React.ReactNode;
  /** If false, shadow will be removed from popup (default: true) */
  shadow?: boolean;
  /** Custom styling */
  style?: React.CSSProperties;
  /** Set min height on popup */
  targetMinHeight?: number;
  /** Set min width on popup */
  targetMinWidth?: number;
}

export interface UncontrolledPopupArgs {
  onClose: () => void;
}

export type PopupChildrenFunction = (
  args: UncontrolledPopupArgs,
) => JSX.Element;

export interface PopupState {
  open: boolean;
}

export interface WithPopupStateHandlers extends StateHandlerMap<PopupState> {
  hide: () => PopupState;
  show: () => PopupState;
}

const withToggleStateHandlers = withStateHandlers<
  PopupState,
  WithPopupStateHandlers,
  UncontrolledPopupProps
>(
  () => ({
    open: false,
  }),
  {
    hide: () => () => {
      return {
        open: false,
      };
    },
    show: () => () => {
      return {
        open: true,
      };
    },
  },
);

const withPopupProps = withProps<
  Omit<PopupProps, 'Popper'>,
  UncontrolledPopupProps & WithPopupStateHandlers & PopupState
>(({ children, hide, show, ...rest }) => {
  return {
    children:
      typeof children === 'function'
        ? (children as PopupChildrenFunction)({ onClose: hide })
        : children,
    onClickOutside: hide,
    onOpen: show,
    ...rest,
  };
});

export const UncontrolledPopup = compose<PopupProps, UncontrolledPopupProps>(
  withToggleStateHandlers,
  withPopupProps,
)(Popup);
