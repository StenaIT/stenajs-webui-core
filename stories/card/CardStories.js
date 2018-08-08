import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Card } from '../../src/components/ui/card/Card';

export const addCardStories = () => {
    storiesOf('Card/Card', module)
        .add(
            'no header',
            withInfo({})(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Card>
                        CardContent
                    </Card>
                </div>
            )),
        )
        .add(
            'header, no button',
            withInfo({})(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Card title="CardTitle">
                        CardContent
                    </Card>
                </div>
            )),
        )
        .add(
            'header, button',
            withInfo({})(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Card title="CardTitle" attributes={{hasButton:true}} onClick={() => false}>
                        CardContent
                    </Card>
                </div>
            )),
        )
        .add(
            'expanded, header, button',
            withInfo({})(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Card title="CardTitle" isExpanded={true} attributes={{hasButton:true}} onClick={() => false}>
                        CardContent
                    </Card>
                </div>
            )),
        )
};
