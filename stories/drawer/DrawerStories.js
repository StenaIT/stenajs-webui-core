import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { AccordionItemTitleStatic } from "../../src/components/ui/drawer/AccordionItemTitleStatic";
import { Drawer } from '../../src/components/ui/drawer';
import { DrawerText } from "../../src/components/ui/drawer/DrawerText";
import {Accordion, AccordionItem, AccordionItemBody, AccordionItemTitle} from "react-accessible-accordion";

import 'react-accessible-accordion/dist/minimal-example.css';
import 'react-accessible-accordion/dist/fancy-example.css';

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
                        <Accordion accordion={false}>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <DrawerText title="Title" value={"Value"} />
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>DrawerContent body content</p>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <DrawerText title="Title 2" value={"100"} />
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>Second drawerContent body content</p>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitleStatic onClick={() => alert(1)}>
                                    <DrawerText title="Title 3" value={"4%"} />
                                </AccordionItemTitleStatic>
                            </AccordionItem>
                        </Accordion>
                    </Drawer>
                </div>
            )),
        )
};
