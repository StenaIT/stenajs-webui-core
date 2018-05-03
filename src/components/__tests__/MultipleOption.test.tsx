import { shallow } from 'enzyme';
import * as React from 'react';
import { MultipleOption } from '../MultipleOption';

describe('MultipleOption', () => {
  const props = {
    allLabel: 'all',
    onAllClick: jest.fn(),
    onOptionClick: jest.fn(),
    options: [],
  };

  it('is rendered', () => {
    const wrapper = shallow(<MultipleOption {...props} />);
    expect(wrapper.length).toBe(1);
  });

  describe('all option', () => {
    describe('when all items are checked', () => {
      it('is rendered as checked', () => {
        const options = [
          {
            checked: true,
            code: 'code 1',
            label: 'label 1',
          },
          {
            checked: true,
            code: 'code 2',
            label: 'label 2',
          },
        ];
        const wrapper = shallow(<MultipleOption {...props} options={options} />);
        expect(wrapper.find('input[name="all"]').prop('checked')).toBe(true);
      });

      it('calls onAllClick with true', () => {
        const options = [
          {
            checked: true,
            code: 'code 1',
            label: 'label 1',
          },
          {
            checked: true,
            code: 'code 2',
            label: 'label 2',
          },
        ];
        const onAllClick = jest.fn();
        const wrapper = shallow(<MultipleOption {...props} onAllClick={onAllClick} options={options} />);
        const e = {
          target: {
            value: 'value',
          },
        };
        wrapper.find('input[name="all"]').simulate('change', e);
        expect(onAllClick).toHaveBeenCalledWith(e, true);
      });
    });

    describe('when any item is not checked', () => {
      it('is not rendered as checked', () => {
        const options = [
          {
            checked: true,
            code: 'code 1',
            label: 'label 1',
          },
          {
            checked: false,
            code: 'code 2',
            label: 'label 2',
          },
        ];
        const wrapper = shallow(<MultipleOption {...props} options={options} />);
        expect(wrapper.find('input[name="all"]').prop('checked')).toBe(false);
      });

      it('calls onAllClick with true', () => {
        const options = [
          {
            checked: true,
            code: 'code 1',
            label: 'label 1',
          },
          {
            checked: false,
            code: 'code 2',
            label: 'label 2',
          },
        ];
        const onAllClick = jest.fn();
        const wrapper = shallow(<MultipleOption {...props} onAllClick={onAllClick} options={options} />);
        const e = {
          target: {
            value: 'value',
          },
        };
        wrapper.find('input[name="all"]').simulate('change', e);
        expect(onAllClick).toHaveBeenCalledWith(e, false);
      });
    });
  });

  describe('options', () => {
    it('renders options', () => {
      const options = [
        {
          checked: true,
          code: 'code 1',
          label: 'label 1',
        },
        {
          checked: false,
          code: 'code 2',
          label: 'label 2',
        },
      ];
      const onOptionClick = jest.fn();
      const wrapper = shallow(<MultipleOption {...props} onOptionClick={onOptionClick} options={options} />);
      const optionsWrapper = wrapper.find('.options');
      expect(optionsWrapper.length).toBe(2);
      optionsWrapper.forEach((optionWrapper, index) => {
        expect(optionWrapper.find('span').text()).toBe(options[index].label);
        const inputWrapper = optionWrapper.find('input');
        expect(inputWrapper.prop('type')).toBe('checkbox');
        expect(inputWrapper.prop('checked')).toBe(options[index].checked);
        const e = {
          target: {
            value: 'value',
          },
        };
        inputWrapper.simulate('change', e);
        expect(onOptionClick).toHaveBeenCalledWith(e, options[index]);
      });
    });
  });
});
