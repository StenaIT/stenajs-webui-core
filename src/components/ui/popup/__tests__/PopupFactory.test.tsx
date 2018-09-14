import { shallow } from 'enzyme';
import * as React from 'react';
import * as Popper from 'react-popper';
import { Omit } from '../../../../types';
import { Popup, PopupProps } from '../Popup';
import { createPopup, createUncontrolledPopup } from '../PopupFactory';
import { UncontrolledPopup } from '../UncontrolledPopup';

describe('PopupFactory', () => {
  describe('createPopup', () => {
    it('returns popup', () => {
      const popupProps: Omit<PopupProps, 'Popper'> = {
        children: <div>children</div>,
        open: false,
        onOpen: jest.fn(),
        referenceChildren: <div>reference</div>,
      };

      const CreatePopup = createPopup(Popper);
      const wrapper = shallow(<CreatePopup {...popupProps} />);
      expect(wrapper.prop('Popper')).toBe(Popper);
      expect(wrapper.type()).toBe(Popup);
    });
  });

  describe('createUncontrolledPopup', () => {
    it('returns uncontrolledPopup', () => {
      const popupProps: Omit<PopupProps, 'Popper'> = {
        children: <div>children</div>,
        open: false,
        onOpen: jest.fn(),
        referenceChildren: <div>reference</div>,
      };

      const CreatePopup = createUncontrolledPopup(Popper);
      const wrapper = shallow(<CreatePopup {...popupProps} />);
      expect(wrapper.prop('Popper')).toBe(Popper);
      expect(wrapper.type()).toBe(UncontrolledPopup);
    });
  });
});
