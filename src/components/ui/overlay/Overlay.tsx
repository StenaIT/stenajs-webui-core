import glamorous from 'glamorous';
import * as React from 'react';
import { KeyboardEventHandler, MouseEventHandler } from 'react';

// tslint:disable:no-any

export interface OverlayProps {
  onClickOutside?: () => void;
  backgroundOpacity?: number;
  zIndex?: number;
}

const ModalWrapper = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  (props: { opacity?: number; zIndex: number }) => ({
    background: `rgba(0, 0, 0, ${
      typeof props.opacity === 'number' ? props.opacity : 0.3
    })`,
    zIndex: props.zIndex || 100,
  }),
);

export class Overlay extends React.Component<OverlayProps> {
  div: HTMLDivElement | undefined = undefined;

  componentDidMount() {
    this.div!.focus();
  }

  onClickOutside: MouseEventHandler<HTMLDivElement> = e => {
    const { onClickOutside } = this.props;
    if (e.target === this.div && onClickOutside) {
      onClickOutside();
      e.stopPropagation();
    }
  };

  onKeyDown: KeyboardEventHandler<HTMLDivElement> = e => {
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
        innerRef={(div: any) => (this.div = div as HTMLDivElement)}
        onKeyDown={this.onKeyDown}
        tabIndex={0}
      >
        {children}
      </ModalWrapper>
    );
  }
}
