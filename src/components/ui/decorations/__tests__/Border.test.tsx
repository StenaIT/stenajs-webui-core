import * as React from 'react';
import { shallow } from 'enzyme';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { BorderComponent } from '../Border';

describe('Border', () => {
  const props = {
    theme: defaultTheme,
  };

  it('adds borderRadius style', () => {
    const wrapper = shallow(
      <BorderComponent {...props} borderRadius={'3px'} />,
    );
    const style = wrapper.find('div').prop('style');
    expect(style).toBeDefined();
    expect(style!.borderRadius).toBe('3px');
  });

  it('doesnt add borderRadius style as undefined', () => {
    const wrapper = shallow(<BorderComponent {...props} />);
    const style = wrapper.find('div').prop('style');
    expect(style).toBeDefined();
    expect(Object.keys(style!).indexOf('borderRadius')).toBe(-1);
  });

  it('doesnt add borderTopLeftRadius style as undefined', () => {
    const wrapper = shallow(<BorderComponent {...props} />);
    const style = wrapper.find('div').prop('style');
    expect(style).toBeDefined();
    expect(Object.keys(style!).indexOf('borderTopLeftRadius')).toBe(-1);
  });

  it('doesnt add borderTopRightRadius style as undefined', () => {
    const wrapper = shallow(<BorderComponent {...props} />);
    const style = wrapper.find('div').prop('style');
    expect(style).toBeDefined();
    expect(Object.keys(style!).indexOf('borderTopRightRadius')).toBe(-1);
  });

  it('doesnt add borderBottomLeftRadius style as undefined', () => {
    const wrapper = shallow(<BorderComponent {...props} />);
    const style = wrapper.find('div').prop('style');
    expect(style).toBeDefined();
    expect(Object.keys(style!).indexOf('borderBottomLeftRadius')).toBe(-1);
  });

  it('doesnt add borderBottomRightRadius style as undefined', () => {
    const wrapper = shallow(<BorderComponent {...props} />);
    const style = wrapper.find('div').prop('style');
    expect(style).toBeDefined();
    expect(Object.keys(style!).indexOf('borderBottomRightRadius')).toBe(-1);
  });
});
