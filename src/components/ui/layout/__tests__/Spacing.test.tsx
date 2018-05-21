import * as React from 'react';
import { shallow } from 'enzyme';
import { SpacingComponent } from '../Spacing';
import { Theme } from '../../../..';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { merge } from 'lodash';

describe('SpacingComponent', () => {
  it('should have a div with width and height', () => {
    const wrapper = shallow(<SpacingComponent theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.paddingTop).toBe('10px');
    expect(wrapper.find('div').prop('style')!.paddingBottom).toBe('10px');
  });

  it('should have a div with double width and height when num=2', () => {
    const wrapper = shallow(<SpacingComponent num={2} theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.paddingTop).toBe('20px');
    expect(wrapper.find('div').prop('style')!.paddingBottom).toBe('20px');
  });

  it('should have a div with half width and height when half=true', () => {
    const wrapper = shallow(<SpacingComponent half theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.paddingTop).toBe('5px');
    expect(wrapper.find('div').prop('style')!.paddingBottom).toBe('5px');
  });

  it('should use theme.metrics.spacing as paddingTop', () => {
    const theme: Theme = merge({}, defaultTheme, { metrics: { spacing: 30 } });
    const wrapper = shallow(<SpacingComponent theme={theme} />);
    expect(wrapper.find('div').prop('style')!.paddingTop).toBe('30px');
  });

  it('should use theme.metrics.spacing as paddingBottom', () => {
    const theme: Theme = merge({}, defaultTheme, { metrics: { spacing: 30 } });
    const wrapper = shallow(<SpacingComponent theme={theme} />);
    expect(wrapper.find('div').prop('style')!.paddingBottom).toBe('30px');
  });
});
