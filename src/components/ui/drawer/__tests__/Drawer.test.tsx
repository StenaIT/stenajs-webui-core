import { shallow } from 'enzyme';
import * as React from 'react';
import {Drawer} from "../Drawer";
import {StandardButton} from "../../buttons";


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


    /*
     ${(isOpen) && `${drawerOpenWrapperStyle} Drawer--open`}`} style={(marginTop) ? {top:marginTop, paddingBottom:marginTop} : {top:0, paddingBottom:0}}>
        <div className={`DrawerContent ${drawerContentStyle}`}>
            <Row>
                <Column width="100%" className="DrawerHeader" style={{textAlign:"right", background: (headerColor) ? headerColor: "#87b758"}}>
                    <StandardButton label={buttonLabel ? buttonLabel : "Hide filter"} leftIcon={buttonIcon ? buttonIcon : "angle-double-left"} color={(headerColor) ? headerColor: "#87b758"} onClick={onClick} />

     */
});