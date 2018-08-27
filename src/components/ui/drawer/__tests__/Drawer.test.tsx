import { shallow } from 'enzyme';
import * as React from 'react';
import {Drawer} from "../Drawer";
import {StandardButton} from "../../buttons";
import {IconProp} from "@fortawesome/fontawesome";


describe('drawer', () => {
    const onClick = jest.fn();
    const defaultOptions = {
        isOpen: true,
        onClick
    };

    describe('open', () => {
        const o = {
            ...defaultOptions,
            isOpen:true
        };
        it( '1', () => {
            const w = shallow(<Drawer {...o} />);
            expect(w
                .find('.DrawerWrapper')
                .prop('className')
            ).toContain("Drawer--open");
        });
        it( '0', () => {
            o.isOpen = false;
            const w = shallow(<Drawer {...o} />);
            expect(w
                .find('.DrawerWrapper')
                .prop('className')
            ).not.toContain("Drawer--open");
        });
    });
    it('function triggered', () => {
        const w = shallow(<Drawer {...defaultOptions} />);
        expect(onClick).not.toBeCalled();
        w.find(StandardButton).simulate('click');
        expect(onClick).toBeCalled();
    });
    describe('attributes', () => {
        describe( 'margin', () => {
            it('set',() => {
                const val = 10;
                const o = {
                    ...defaultOptions,
                    marginTop: val
                };
                const w = shallow(<Drawer {...o} />);
                expect(w.find('.DrawerWrapper').prop('style')).toEqual({
                    top:val,
                    paddingBottom:val
                });
            });
            it('not set',() => {
                const val = 0;
                const o = {
                    ...defaultOptions
                };
                const w = shallow(<Drawer {...o} />);
                expect(w.find('.DrawerWrapper').prop('style')).toEqual({
                    top:val,
                    paddingBottom:val
                });
            });
        });
        describe('headerColor', () => {
            it('set',() => {
                const val = "#ff0000";
                const o = {
                    ...defaultOptions,
                    headerColor: val
                };
                const w = shallow(<Drawer {...o} />);
                const h = w.find('.DrawerHeader');
                const b = h.find(StandardButton);
                expect(h.prop('style')).toEqual({textAlign:"right", background: val});
                expect(b.prop('color')).toEqual(val);
            });
            it('not set',() => {
                const val = "#87b758";
                const o = {
                    ...defaultOptions
                };
                const w = shallow(<Drawer {...o} />);
                const h = w.find('.DrawerHeader');
                const b = h.find(StandardButton);
                expect(h.prop('style')).toEqual({textAlign:"right", background: val});
                expect(b.prop('color')).toEqual(val);
            });
        });
        describe('label', () => {
            it('set',() => {
                const val = "Label";
                const o = {
                    ...defaultOptions,
                    buttonLabel: val
                };
                const w = shallow(<Drawer {...o} />);
                const b = w.find('.DrawerHeader').find(StandardButton);
                expect(b.prop('label')).toEqual(val);
            });
            it('not set',() => {
                const val = "Hide filter";
                const o = {
                    ...defaultOptions
                };
                const w = shallow(<Drawer {...o} />);
                const b = w.find('.DrawerHeader').find(StandardButton);
                expect(b.prop('label')).toEqual(val);
            });
        });
        describe('icon', () => {
            it('set',() => {
                const val = "angle-double-right";
                const o = {
                    ...defaultOptions,
                    buttonIcon: val as IconProp
                };
                const w = shallow(<Drawer {...o} />);
                const b = w.find('.DrawerHeader').find(StandardButton);
                expect(b.prop('leftIcon')).toEqual(val);
            });
            it('not set',() => {
                const val = "angle-double-left";
                const o = {
                    ...defaultOptions
                };
                const w = shallow(<Drawer {...o} />);
                const b = w.find('.DrawerHeader').find(StandardButton);
                expect(b.prop('leftIcon')).toEqual(val);
            });
        });
    });
});