import * as React from "react";

export interface IDrawerTextProps {
    title?: string,
    valueString?: string | number
}
export const DrawerText: React.StatelessComponent<IDrawerTextProps> = ({
    title,
    valueString
}) => (
    <span>{title} <strong style={{
        float: "right",
        marginRight: 22,
        fontSize: "0.8em"
    }}>{valueString}</strong></span>
)