import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Drawer } from '../../src/components/ui/drawer';

export const addDrawerStories = () => {
    storiesOf('Drawer', module)
        .add(
            'default',
            withInfo({})(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Drawer>
                        CardContent
                    </Drawer>
                </div>
            )),
        )
};
