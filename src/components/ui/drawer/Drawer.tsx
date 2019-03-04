import * as React from 'react';
import { Column, Row } from '../layout';
import { StandardButton } from '../buttons';
import { IconProp } from '@fortawesome/fontawesome';
import styled from 'react-emotion';

export interface DrawerProps {
  isOpen: boolean;
  buttonLabel?: string;
  buttonIcon?: IconProp;
  headerColor: string;
  onClick: () => void;
  marginTop?: number;
}

export const DrawerHeader = styled(Column)<{headerColor: string}>`
  width: 100%;
  text-align: right;
  background: ${({ headerColor }) => headerColor};
`;
const DrawerChildWrapper = styled('div')`
  display: block;
  width: 100%;
  min-width: 360px;
`;
const DrawerContent = styled('div')`
  height: 100%;
  overflow-y: scroll;
`;
export const DrawerWrapper = styled('div')<{isOpen: boolean, top?: number}>`  
  position: fixed;
  left: ${({isOpen}) => isOpen ? '0' : '-500px'};
  height: 100%;
  width: 400px;
  transition: .6s all;
  display: block;
  z-index: 9999;
  background: white;
  
  top: ${({ top }) => top || 0};
  padding-bottom: ${({ top }) => top || 0};
  
  *{
    box-sizing: border-box;
  }
  .accordion__title,
  .Collapsible__trigger{
    font-size: 14px;
    font-family: "Open Sans";
  }
`;

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClick,
  children,
  buttonLabel,
  buttonIcon,
  headerColor,
  marginTop,
}) => (
  <DrawerWrapper
    isOpen={isOpen}
    top={marginTop}
  >
    <DrawerContent>
      <Row>
        <DrawerHeader headerColor={headerColor}>
          <StandardButton
            label={buttonLabel ? buttonLabel : 'Hide filter'}
            leftIcon={buttonIcon ? buttonIcon : 'angle-double-left'}
            color={headerColor}
            onClick={onClick}
          />
        </DrawerHeader>
      </Row>
      <Row>
        <DrawerChildWrapper>
          {children}
        </DrawerChildWrapper>
      </Row>
    </DrawerContent>
  </DrawerWrapper>
);
