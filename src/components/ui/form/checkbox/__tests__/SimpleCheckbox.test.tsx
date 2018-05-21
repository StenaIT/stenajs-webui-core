import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'enzyme';
import * as React from 'react';
import { defaultTheme } from '../../../../../themes/DefaultTheme';
import { Clickable } from '../../../interaction/Clickable';
import {
  InnerPropsForSimpleCheckboxComponent,
  SimpleCheckboxComponent,
} from '../SimpleCheckbox';

describe('SimpleCheckbox', () => {
  const props: InnerPropsForSimpleCheckboxComponent = {
    onToggle: jest.fn(),
    theme: defaultTheme,
  };

  describe('disabled', () => {
    describe('when disabled is true', () => {
      it('sets onClick to undefined', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} disabled />,
        );
        expect(wrapper.find(Clickable).prop('onClick')).toBe(undefined);
      });
    });

    describe('when disabled is false', () => {
      it('sets onClick to specified onClick', () => {
        const wrapper = shallow(<SimpleCheckboxComponent {...props} />);
        expect(wrapper.find(Clickable).prop('onClick')).toBe(props.onToggle);
      });
    });
  });

  describe('icon', () => {
    describe('when checked', () => {
      it('uses specified icon from theme', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={true} />,
        );
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toBe(
          defaultTheme.components.SimpleCheckbox.iconOn,
        );
      });
    });

    describe('when not checked', () => {
      it('uses specified icon from theme', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={false} />,
        );
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toBe(
          defaultTheme.components.SimpleCheckbox.iconOff,
        );
      });
    });
  });

  describe('color', () => {
    describe('when disabled', () => {
      it('uses specified color from theme even if value is true', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={true} disabled />,
        );
        expect(wrapper.find(FontAwesomeIcon).prop('color')).toBe(
          defaultTheme.components.SimpleCheckbox.colorDisabled,
        );
      });

      it('uses specified color from theme even if value is false', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={false} disabled />,
        );
        expect(wrapper.find(FontAwesomeIcon).prop('color')).toBe(
          defaultTheme.components.SimpleCheckbox.colorDisabled,
        );
      });
    });

    describe('when checked', () => {
      it('uses specified color from theme', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={true} />,
        );
        expect(wrapper.find(FontAwesomeIcon).prop('color')).toBe(
          defaultTheme.components.SimpleCheckbox.colorOn,
        );
      });
    });

    describe('when not checked', () => {
      it('uses specified color from theme', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={false} />,
        );
        expect(wrapper.find(FontAwesomeIcon).prop('color')).toBe(
          defaultTheme.components.SimpleCheckbox.colorOff,
        );
      });
    });
  });

  describe('onChange', () => {
    it('calls onToggle internally when clicking', () => {
      const onToggle = jest.fn();
      const wrapper = shallow(
        <SimpleCheckboxComponent {...props} value={true} onToggle={onToggle} />,
      );
      wrapper.find(Clickable).simulate('click');
      expect(onToggle).toHaveBeenCalled();
    });
  });
});
