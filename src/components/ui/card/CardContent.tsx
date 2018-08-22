import * as React from "react";
import {Column, Indent, Row, Spacing} from "../layout";

export const CardContent: React.StatelessComponent<{
    paddingHorizontal?:number,
    paddingVertical?:number,
}> = ({
    paddingHorizontal,
    paddingVertical,
    children,
}) => (
    <Row>
        <Column className="CardContentWrapper" width="100%">
            <Spacing num={(paddingVertical !== undefined) ? paddingVertical : 2}>
                <Indent num={(paddingHorizontal !== undefined) ? paddingHorizontal : 2}>
                    <Column className="CardContent" width={'100%'}>
                        {children}
                    </Column>
                </Indent>
            </Spacing>
        </Column>
    </Row>
)