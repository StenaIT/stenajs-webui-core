import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Space } from '../Space';
import { GetTheme } from '../../../theme/GetTheme';

describe('Space', () => {
  it('should apply default theme to space', () => {
    const wrapper = mount(<Space />);
    console.log(
      wrapper
        .find('div')
        .dive()
        .at(0)
        .props(),
    );
    expect(
      wrapper
        .at(0)
        .find('div')
        .prop('style')!.width,
    ).toBe('10px');
  });
});
