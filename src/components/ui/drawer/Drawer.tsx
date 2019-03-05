import * as React from 'react';
import { Row } from '../layout';
import styled from 'react-emotion';

export interface DrawerProps {
  isOpen: boolean;
  header?: React.ReactNode;
  onClick: () => void;
  marginTop?: number;
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
  background: white;
  top: ${({ top }) => top || 0}px;
`;

export const Drawer: React.FC<DrawerProps> = ({ isOpen, children, header, marginTop }) => (
  <DrawerWrapper isOpen={isOpen} top={marginTop}>
    <DrawerContent top={marginTop}>
      <Row>{header && header}</Row>
      <Row>
        <DrawerChildWrapper>{children}</DrawerChildWrapper>
      </Row>
    </DrawerContent>
  </DrawerWrapper>
);
