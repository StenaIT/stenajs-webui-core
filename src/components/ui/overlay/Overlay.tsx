import styled from '@emotion/styled';
import * as React from 'react';

// tslint:disable:no-any

export interface OverlayProps {
  onClickOutside?: () => void;
  backgroundOpacity?: number;
  zIndex?: number;
}

interface ModalWrapperProps {
  opacity?: number;
  zIndex: number;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    ${props => (typeof props.opacity === 'number' ? props.opacity : 0.3)}
  );
  z-index: ${props => props.zIndex || 100};
`;

export class Overlay extends React.Component<OverlayProps> {
  div: HTMLDivElement | undefined = undefined;

  componentDidMount() {
    this.div!.focus();
  }

  onClickOutside: React.MouseEventHandler<HTMLDivElement> = e => {
    const { onClickOutside } = this.props;
    if (e.target === this.div && onClickOutside) {
      onClickOutside();
      e.stopPropagation();
    }
  };

  onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    const { onClickOutside } = this.props;
    if (e.key === 'Escape' && onClickOutside) {
      onClickOutside();
    }
  };

  render() {
    const { children, backgroundOpacity, zIndex = 100 } = this.props;
    return (
      <ModalWrapper
        zIndex={zIndex}
        opacity={backgroundOpacity}
        id={'modal-wrapper'}
        onClick={this.onClickOutside}
        ref={(div: any) => (this.div = div as HTMLDivElement)}
        onKeyDown={this.onKeyDown}
        tabIndex={0}
      >
        {children}
      </ModalWrapper>
    );
  }
}
