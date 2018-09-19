import { Color } from 'csstype';
import { Modifiers, Placement } from 'popper.js';
import * as React from 'react';
import * as ReactPopper from 'react-popper';
import { ReferenceChildrenProps } from 'react-popper';
import { EnhancedPopper } from './EnhancedPopper';

export interface PopperInterface {
  Manager: typeof ReactPopper.Manager;
  Popper: typeof ReactPopper.Popper;
  Reference: typeof ReactPopper.Reference;
}

export interface PopupProps {
  /** Background color of popup */
  backgroundColor?: Color;
  /** Content to be rendered in popup */
  children: React.ReactNode;
  /** An object containing custom settings for the
   * [Popper.js modifiers]{@link https://popper.js.org/popper-documentation.html#modifiers}
   */
  modifiers?: Modifiers;
  /** If true, the popup is open (default:false) */
  open: boolean;
  /** Callback function called when a click outside the popup is made */
  onClickOutside?: () => void;
  /** Callback function called when referenceChildren is clicked */
  onOpen: () => void;
  /** Placement of popup related to referenceChildren */
  placement?: Placement;
  /** The Popper imported from react-popper */
  Popper: PopperInterface;
  /** The element that triggers the popup */
  referenceChildren: React.ReactNode;
  /** If false, shadow will be removed from popup (default: true) */
  shadow?: boolean;
  /** Set min height on popup */
  targetMinHeight?: number;
  /** Set min width on popup */
  targetMinWidth?: number;
}

export class Popup extends React.Component<PopupProps> {
  public render() {
    const {
      backgroundColor,
      children,
      open,
      onClickOutside,
      Popper,
      modifiers,
      placement,
      shadow,
      targetMinHeight,
      targetMinWidth,
    } = this.props;

    return (
      <Popper.Manager>
        <Popper.Reference>{this.renderPropsReference}</Popper.Reference>
        {open && (
          <EnhancedPopper
            backgroundColor={backgroundColor}
            children={children}
            onClickOutside={onClickOutside}
            modifiers={modifiers}
            placement={placement}
            PopperComponent={Popper.Popper}
            shadow={shadow}
            targetMinHeight={targetMinHeight}
            targetMinWidth={targetMinWidth}
          />
        )}
      </Popper.Manager>
    );
  }

  private renderPropsReference = ({ ref }: ReferenceChildrenProps) => {
    return (
      <span ref={ref} onClick={this.props.onOpen}>
        {this.props.referenceChildren}
      </span>
    );
  };
}
