import { Placement } from 'popper.js';
import * as React from 'react';
import * as enhanceWithClickOutside from 'react-click-outside';
import styled from 'react-emotion';
import { Popper, PopperChildrenProps } from 'react-popper';
import { BOX_SHADOW } from '../decorations';

export interface PopperProps {
  backgroundColor?: string;
  children: React.ReactNode;
  onClickOutside?: () => void;
  PopperComponent: typeof Popper;
  placement?: Placement;
  shadow?: boolean;
  targetMinHeight?: number;
  targetMinWidth?: number;
}

const TargetContainer = styled('div')<Partial<PopperProps>>(props => ({
  backgroundColor: props.backgroundColor || '#fff',
  boxShadow: props.shadow ? BOX_SHADOW : undefined,
  minHeight: props.targetMinHeight,
  minWidth: props.targetMinWidth,
}));

export class PurePopper extends React.Component<PopperProps> {
  public render() {
    const {
      PopperComponent,
      placement: popupPlacement = 'auto-end',
    } = this.props;

    return (
      <PopperComponent placement={popupPlacement}>
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
    style,
    placement,
    arrowProps,
  }: PopperChildrenProps) => {
    const {
      backgroundColor,
      children,
      shadow = true,
      targetMinHeight,
      targetMinWidth,
    } = this.props;
    return (
      <div ref={ref} style={style} data-placement={placement}>
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
