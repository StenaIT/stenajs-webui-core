import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Drawer } from '../../src/components/ui/drawer';
import {DrawerCollapsibleRegular} from "../../src/components/ui/drawer/DrawerCollapsibleRegular";
import {DrawerCollapsibleStatic} from "../../src/components/ui/drawer/DrawerCollapsibleStatic";

export const addDrawerStories = () => {
    storiesOf('Drawer', module)
        .add(
            'default',
            withInfo({
                styles: {
                    infoBody: {
                        paddingLeft:400
                    }
                }
            })(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Drawer isOpen={true} onClick={() => false}>
                        DrawerContent
                    </Drawer>
                </div>
            )),
        )
        .add(
            'with margin top',
            withInfo({
                styles: {
                    infoBody: {
                        paddingLeft:400
                    }
                }
            })(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Drawer isOpen={true} onClick={() => false} marginTop={120}>
                        DrawerContent
                    </Drawer>
                </div>
            )),
        )
        .add(
            'configured header',
            withInfo({
                styles: {
                    infoBody: {
                        paddingLeft:400
                    }
                }
            })(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Drawer isOpen={true} onClick={() => false} headerColor="#417EBF" buttonLabel="Custom button" buttonIcon="coffee">
                        DrawerContent
                    </Drawer>
                </div>
            )),
        )
        .add(
            'with collapsible',
            withInfo({
                styles: {
                    infoBody: {
                        paddingLeft:400
                    }
                }
            })(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Drawer isOpen={true} onClick={() => false} headerColor="#417EBF" buttonLabel="Custom button" buttonIcon="coffee">
                        <DrawerCollapsibleRegular text={"Title"} value={"Value"}>
                            DrawerContent
                        </DrawerCollapsibleRegular>
                    </Drawer>
                </div>
            )),
        )
        .add(
            'with both collapsibles',
            withInfo({
                styles: {
                    infoBody: {
                        paddingLeft:400
                    }
                }
            })(() => (
                <div style={{ display: 'table', width: "100%" }}>
                    <Drawer isOpen={true} onClick={() => false} headerColor="#417EBF" buttonLabel="Custom button" buttonIcon="coffee">
                        <DrawerCollapsibleRegular text={"Title"} value={"1"}>
                            DrawerContent
                        </DrawerCollapsibleRegular>
                        <DrawerCollapsibleStatic text={"Title"} value={"2"} onClick={() => false}>
                            DrawerContent
                        </DrawerCollapsibleStatic>
                    </Drawer>
                </div>
            )),
        )
};
