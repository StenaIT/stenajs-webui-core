import * as React from "react";
import {Column, Row, Space, Spacing} from "../layout";
import {cardTitleStyle} from "./CardStyle";
import {Border} from "../decorations";
import {DefaultText} from "../text";
import {CardAttributes} from "./Card";
import {CardHeaderButton} from "./CardHeaderButton";
import {CardHeaderNotice} from "./CardHeaderNotice";

export const CardHeader: React.StatelessComponent<{
    attributes:CardAttributes,
    title?:string,
    isExpanded?:boolean,
    onClick?:() => void
}> = ({
    isExpanded,
    attributes,
    title,
    onClick
}) => {
    const doShow = (attributes.hasButton || title || !(attributes.notice === undefined));
    console.log(
        "______",
        attributes.hasButton || title || !(attributes.notice === undefined),
        attributes.hasButton,
        title,
        attributes.notice,
        !(attributes.notice === undefined)
    )
    if( !doShow ){ return (<div />); }
    return (
        <Border bottom={true}>
            <Row
                width="100%"
                alignItems="flex-end"
                justifyContent="space-between"
            >
                <Column
                    minWidth="300px"
                    alignSelf="flex-start"
                    flexGrow={1}
                >
                    <Spacing num={attributes.headerSpacingFactor}>
                        <Row>
                            <Space />
                                <DefaultText>
                                    <span className={`${cardTitleStyle}`}>{title}</span>
                                </DefaultText>
                            <Space />
                        </Row>
                    </Spacing>
                </Column>
                <Column alignSelf="flex-end" flexGrow={0}>
                    <Row>
                        <Space />
                        {attributes.notice !== undefined && (
                            <CardHeaderNotice notice={attributes.notice}/>
                        )}
                        {attributes.hasButton && (
                            <CardHeaderButton onClick={(onClick !== undefined) ? onClick : () => false}
                                              label={isExpanded
                                ? attributes.btnLabelExpanded
                                : attributes.btnLabelDefault}  />
                        )}
                        <Space />
                    </Row>
                </Column>
            </Row>
        </Border>
)
}