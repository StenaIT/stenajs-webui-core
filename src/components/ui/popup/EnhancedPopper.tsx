import { Modifiers, Placement } from 'popper.js';
import * as React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import styled from 'react-emotion';
import { Popper, PopperChildrenProps } from 'react-popper';

export interface PopperProps {
  backgroundColor?: string;
  children: React.ReactNode;
  onClickOutside?: () => void;
  PopperComponent: typeof Popper;
  placement?: Placement;
  modifiers?: Modifiers;
  shadow?: boolean;
  style?: React.CSSProperties;
  targetMinHeight?: number;
  targetMinWidth?: number;
}

export const POPUP_BOX_SHADOW = 'rgba(0, 0, 0, 0.28) 0 2px 13px 0';

const TargetContainer = styled('div')<Partial<PopperProps>>(props => ({
  backgroundColor: props.backgroundColor || '#fff',
  boxShadow: props.shadow ? POPUP_BOX_SHADOW : undefined,
  minHeight: props.targetMinHeight,
  minWidth: props.targetMinWidth,
}));

export class PurePopper extends React.Component<PopperProps> {
  public render() {
    const {
      modifiers,
      PopperComponent,
      placement: popupPlacement = 'auto-end',
    } = this.props;

    return (
      <PopperComponent placement={popupPlacement} modifiers={modifiers}>
        {this.renderPropsChildren}
      </PopperComponent>
    );
  }

  public handleClickOutside() {
    const { onClickOutside } = this.props;
    if (onClickOutside) {
      onClickOutside();
    }
  }

  private renderPropsChildren = ({
    ref,
    style: popperChildrenStyle,
    placement,
    arrowProps,
  }: PopperChildrenProps) => {
    const {
      backgroundColor,
      children,
      shadow = true,
      style,
      targetMinHeight,
      targetMinWidth,
    } = this.props;
    return (
      <div
        ref={ref}
        style={{ ...popperChildrenStyle, ...style }}
        data-placement={placement}
      >
        <TargetContainer
          backgroundColor={backgroundColor}
          shadow={shadow}
          targetMinHeight={targetMinHeight}
          targetMinWidth={targetMinWidth}
        >
          {children}
        </TargetContainer>
        <div ref={arrowProps.ref} style={arrowProps.style} />
      </div>
    );
  };
}

export const EnhancedPopper = enhanceWithClickOutside<PopperProps>(PurePopper);
