import * as React from "react";
import {DrawerText} from "./DrawerText";
import {collapsibleStaticStyle, collapsibleStyle} from "./DrawerStyle";
import {DefaultText} from "../text";

export interface IDrawerCollapsibleStaticProps {
    text?:string,
    value?:string|number,
    onClick:() => void
}

export const DrawerCollapsibleStatic: React.StatelessComponent<IDrawerCollapsibleStaticProps> = ({
    text,
    onClick,
    value
}) => (
    <button className={`${collapsibleStyle} ${collapsibleStaticStyle}`} onClick={onClick}>
        <span className="Collapsible__trigger is-closed">
            <DefaultText><DrawerText title={text} valueString={value} /></DefaultText>
        </span>
    </button>
);