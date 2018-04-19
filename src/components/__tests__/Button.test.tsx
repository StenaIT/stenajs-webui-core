import { shallow } from 'enzyme';
import * as React from 'react';
import { Button, IButtonProps } from '../Button';

describe('Button', () => {
  const props: IButtonProps = {
    children: 'default button',
    onClick: jest.fn(),
  };

  it('renders children', () => {
    const children = 'children';
    const wrapper = shallow(<Button {...props} children={children} />);
    expect(wrapper.text()).toBe(children);
  });

  it('passes onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button {...props} onClick={onClick} />);
    expect(wrapper.prop('onClick')).toBe(onClick);
  });
});
