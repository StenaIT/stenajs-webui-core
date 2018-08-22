import * as React from "react";
import {Column, Spacing} from "../layout";
import {StandardButton} from "../buttons";

export const CardHeaderButton: React.StatelessComponent<{
    label?:string,
    onClick:() => void,
}> = ({
    label,
    onClick
}) => (
    <Column className="CardBtn">
        <Spacing>
            <StandardButton
                onClick={onClick}
                label={label}
            />
        </Spacing>
    </Column>
)