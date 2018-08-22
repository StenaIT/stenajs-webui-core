import * as React from "react";
import {Column, Row, Space, Spacing} from "../layout";
import {Border} from "../decorations";
import {StandardButton} from "../buttons";
import {IconProp} from "@fortawesome/fontawesome";
import {drawerOpenWrapperStyle, drawerWrapperStyle} from "./DrawerStyle";

export interface IDrawerProps{
    isOpen:  boolean,
    buttonLabel?: string,
    buttonIcon?: IconProp,
    onClick: () => void,
}
export const Drawer: React.StatelessComponent<IDrawerProps> = ({
   isOpen, onClick, children, buttonLabel, buttonIcon
}) => (
    <div className={`${drawerWrapperStyle} ${(isOpen) && drawerOpenWrapperStyle}`}>
        <div className="StatisticsFilterDrawerContent">
            <Row>
                <Column width="100%" className="StatisticsFilterDrawerHeader">
                    <StandardButton label={buttonLabel ? buttonLabel : "Hide filter"} leftIcon={buttonIcon ? buttonIcon : "angle-double-left"} onClick={onClick} />
                </Column>
            </Row>
            <Row>
                <Space num={2} />
                    <Spacing num={2}>
                        <Border>
                            {children}
                        </Border>
                    </Spacing>
                <Space num={2} />
            </Row>
        </div>
    </div>
)