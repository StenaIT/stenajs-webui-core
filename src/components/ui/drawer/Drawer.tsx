import * as React from 'react';
import { Column, Row, Space, Spacing } from '../layout';
import { Border } from '../decorations';
import { StandardButton } from '../buttons';
import { IconProp } from '@fortawesome/fontawesome';
import {
  drawerContentStyle,
  drawerOpenWrapperStyle,
  drawerWrapperStyle,
} from './DrawerStyle';

export interface IDrawerProps {
  isOpen: boolean;
  buttonLabel?: string;
  buttonIcon?: IconProp;
  headerColor?: string;
  onClick: () => void;
  marginTop?: number;
}
export const Drawer: React.StatelessComponent<IDrawerProps> = ({
  isOpen,
  onClick,
  children,
  buttonLabel,
  buttonIcon,
  headerColor,
  marginTop,
}) => (
  <div
    className={`DrawerWrapper ${drawerWrapperStyle} ${isOpen &&
      `${drawerOpenWrapperStyle} Drawer--open`}`}
    style={
      marginTop
        ? { top: marginTop, paddingBottom: marginTop }
        : { top: 0, paddingBottom: 0 }
    }
  >
    <div className={`DrawerContent ${drawerContentStyle}`}>
      <Row>
        <Column
          width="100%"
          className="DrawerHeader"
          style={{
            textAlign: 'right',
            background: headerColor ? headerColor : '#87b758',
          }}
        >
          <StandardButton
            label={buttonLabel ? buttonLabel : 'Hide filter'}
            leftIcon={buttonIcon ? buttonIcon : 'angle-double-left'}
            color={headerColor ? headerColor : '#87b758'}
            onClick={onClick}
          />
        </Column>
      </Row>
      <Row>
        <Space num={2} />
        <Spacing num={2}>
          <Border>
            <div style={{ display: 'block', width: '100%', minWidth: 360 }}>
              {children}
            </div>
          </Border>
        </Spacing>
        <Space num={2} />
      </Row>
    </div>
  </div>
);
