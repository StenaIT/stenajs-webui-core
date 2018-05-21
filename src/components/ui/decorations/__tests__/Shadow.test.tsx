import { shallow } from 'enzyme';
import * as React from 'react';
import { Shadow } from '../Shadow';

describe('Shadow', () => {
  it('applies shadow', () => {
    const wrapper = shallow(<Shadow />);
    expect(wrapper.find('div').prop('style')!.boxShadow).toBe(
      'rgba(0, 0, 0, 0.2) 0px 0px 10px 4px',
    );
  });
});
