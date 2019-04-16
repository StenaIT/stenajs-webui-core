import styled from '@emotion/styled';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { defaultColors } from '../../../themes/default-values';
import { Row } from '../layout';

export interface DrawerProps {
  drawerRef: React.Ref<HTMLDivElement>;
  header?: React.ReactNode;
  isOpen: boolean;
  marginTop?: number;
  onClick: () => void;
}

const DrawerChildWrapper = styled('div')`
  display: block;
  width: 100%;
  min-width: 360px;
`;
const DrawerContent = styled('div')<{ top?: number }>`
  height: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${defaultColors.white};

  :after {
    content: '\\a0';
    display: block;
    width: 10px;
    height: ${({ top }) => top || 0}px;
  }
`;
export const DrawerWrapper = styled('div')<{ isOpen: boolean; top?: number }>`
  position: fixed;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-500px')});
  height: 100%;
  width: 400px;
  transition: 0.6s all;
  box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, 0.15);
  z-index: 9;
  background: ${defaultColors.white};
  top: ${({ top }) => top || 0}px;
`;

export const Drawer: React.FC<DrawerProps> = ({
  children,
  drawerRef,
  header,
  isOpen,
  marginTop,
}) =>
  ReactDOM.createPortal(
    <DrawerWrapper ref={drawerRef} isOpen={isOpen} top={marginTop}>
      <DrawerContent top={marginTop}>
        <Row>{header && header}</Row>
        <Row>
          <DrawerChildWrapper>{children}</DrawerChildWrapper>
        </Row>
      </DrawerContent>
    </DrawerWrapper>,
    document.body,
  );
