import { shallow } from 'enzyme';
import * as React from 'react';
import { defaultTheme } from '../../../../../themes/DefaultTheme';
import { Icon } from '../../../icon/Icon';
import { Clickable } from '../../../interaction/Clickable';
import { SimpleCheckboxComponent } from '../SimpleCheckbox';

describe('SimpleCheckbox', () => {
  const props = {
    onToggle: jest.fn(),
    theme: defaultTheme.components.SimpleCheckbox,
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
        expect(wrapper.find(Icon).prop('name')).toBe(
          defaultTheme.components.SimpleCheckbox.checkIcon,
        );
      });
    });

    describe('when not checked', () => {
      it('has no icon', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={false} />,
        );
        expect(wrapper.find(Icon).length).toBe(0);
      });
    });
  });

  describe('color', () => {
    describe('when disabled', () => {
      it('uses specified color from theme even if value is true', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={true} disabled />,
        );
        expect(wrapper.find(Icon).prop('color')).toBe(
          defaultTheme.components.SimpleCheckbox.iconColorDisabled,
        );
      });
    });

    describe('when checked', () => {
      it('uses specified color from theme', () => {
        const wrapper = shallow(
          <SimpleCheckboxComponent {...props} value={true} />,
        );
        expect(wrapper.find(Icon).prop('color')).toBe(
          defaultTheme.components.SimpleCheckbox.iconColor,
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
