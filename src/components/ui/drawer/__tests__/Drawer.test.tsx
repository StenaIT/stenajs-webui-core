import { shallow } from 'enzyme';
import * as React from 'react';
import {Drawer, DrawerHeader, DrawerWrapper} from '../Drawer';
import { StandardButton } from '../../buttons';
import { IconProp } from '@fortawesome/fontawesome';

describe('drawer', () => {
  const onClick = jest.fn();
  const defaultOptions = {
    isOpen: true,
    onClick,
    headerColor: 'black'
  };

  describe('open', () => {
    const o = {
      ...defaultOptions,
      isOpen: true,
    };
    it('1', () => {
      const w = shallow(<Drawer {...o} />);
      expect(w.find(DrawerWrapper).prop('isOpen')).toEqual(o.isOpen);
    });
    it('0', () => {
      o.isOpen = false;
      const w = shallow(<Drawer {...o} />);
      expect(w.find(DrawerWrapper).prop('isOpen')).toEqual(o.isOpen);
    });
  });
  it('function triggered', () => {
    const w = shallow(<Drawer {...defaultOptions} />);
    expect(onClick).not.toBeCalled();
    w.find(StandardButton).simulate('click');
    expect(onClick).toBeCalled();
  });
  describe('attributes', () => {
    describe('margin', () => {
      it('set', () => {
        const val = 10;
        const o = {
          ...defaultOptions,
          marginTop: val,
        };
        const w = shallow(<Drawer {...o} />);
        expect(w.find(DrawerWrapper).prop('top')).toEqual(val);
      });
      it('not set', () => {
        const o = {
          ...defaultOptions,
        };
        const w = shallow(<Drawer {...o} />);
        expect(w.find(DrawerWrapper).prop('top')).toEqual(undefined);
      });
    });
    describe('headerColor', () => {
      it('set', () => {
        const val = '#ff0000';
        const o = {
          ...defaultOptions,
          headerColor: val,
        };
        const w = shallow(<Drawer {...o} />);
        const h = w.find(DrawerHeader);
        const b = h.find(StandardButton);
        expect(h.prop('headerColor')).toEqual(val);
        expect(b.prop('color')).toEqual(val);
      });
      it('not set', () => {
        const val = 'black';
        const o = {
          ...defaultOptions,
        };
        const w = shallow(<Drawer {...o} />);
        const h = w.find(DrawerHeader);
        const b = h.find(StandardButton);
        expect(h.prop('headerColor')).toEqual(val);
        expect(b.prop('color')).toEqual(val);
      });
    });
    describe('label', () => {
      it('set', () => {
        const val = 'Label';
        const o = {
          ...defaultOptions,
          buttonLabel: val,
        };
        const w = shallow(<Drawer {...o} />);
        const b = w.find(DrawerHeader).find(StandardButton);
        expect(b.prop('label')).toEqual(val);
      });
      it('not set', () => {
        const val = 'Hide filter';
        const o = {
          ...defaultOptions,
        };
        const w = shallow(<Drawer {...o} />);
        const b = w.find(DrawerHeader).find(StandardButton);
        expect(b.prop('label')).toEqual(val);
      });
    });
    describe('icon', () => {
      it('set', () => {
        const val = 'angle-double-right';
        const o = {
          ...defaultOptions,
          buttonIcon: val as IconProp,
        };
        const w = shallow(<Drawer {...o} />);
        const b = w.find(DrawerHeader).find(StandardButton);
        expect(b.prop('leftIcon')).toEqual(val);
      });
      it('not set', () => {
        const val = 'angle-double-left';
        const o = {
          ...defaultOptions,
        };
        const w = shallow(<Drawer {...o} />);
        const b = w.find(DrawerHeader).find(StandardButton);
        expect(b.prop('leftIcon')).toEqual(val);
      });
    });
  });
});
