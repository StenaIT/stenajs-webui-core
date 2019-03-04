import { shallow } from 'enzyme';
import * as React from 'react';
import { Drawer, DrawerWrapper } from '../Drawer';

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
  });
});
