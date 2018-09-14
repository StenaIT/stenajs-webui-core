import { shallow } from 'enzyme';
import * as React from 'react';
import { Shadow } from '../Shadow';

describe('Shadow', () => {
  it('applies shadow', () => {
    const wrapper = shallow(<Shadow />);
    expect(wrapper.find('div').prop('className')).toBeDefined();
  });
});
