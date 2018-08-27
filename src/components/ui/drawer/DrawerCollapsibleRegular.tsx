
import * as React from "react";
import Collapsible from 'react-collapsible';
import {DrawerText} from "./DrawerText";
import {collapsibleStyle} from "./DrawerStyle";

export interface ICollapsibleRegularProps {
    onToggle:() => void,
    open:boolean,
    text?:string,
    value?:string|number,
}
export const DrawerCollapsibleRegular: React.StatelessComponent<ICollapsibleRegularProps> = ({
    children,
    onToggle,
    open,
    text,
    value,
}) => (
    <div className={`${collapsibleStyle}`}>
        <Collapsible onOpening={onToggle} onClosing={onToggle} trigger={<DrawerText title={text} valueString={value} />} open={open}>
            {children}
        </Collapsible>
    </div>
);