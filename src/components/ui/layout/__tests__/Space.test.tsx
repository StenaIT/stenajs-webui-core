import * as React from 'react';
import { shallow } from 'enzyme';
import { SpaceComponent } from '../Space';
import { Theme } from '../../../..';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { merge } from 'lodash';

describe('SpaceComponent', () => {
  it('should have a div with width and height', () => {
    const wrapper = shallow(<SpaceComponent theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.width).toBe('10px');
    expect(wrapper.find('div').prop('style')!.height).toBe('10px');
  });

  it('should have a div with double width and height when num=2', () => {
    const wrapper = shallow(<SpaceComponent num={2} theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.width).toBe('20px');
    expect(wrapper.find('div').prop('style')!.height).toBe('20px');
  });

  it('should have a div with half width and height when half=true', () => {
    const wrapper = shallow(<SpaceComponent half theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.width).toBe('5px');
    expect(wrapper.find('div').prop('style')!.height).toBe('5px');
  });

  it('should use theme.metrics.space as width', () => {
    const theme: Theme = merge({}, defaultTheme, { metrics: { space: 30 } });
    const wrapper = shallow(<SpaceComponent theme={theme} />);
    expect(wrapper.find('div').prop('style')!.width).toBe('30px');
  });

  it('should use theme.metrics.space as height', () => {
    const theme: Theme = merge({}, defaultTheme, { metrics: { space: 30 } });
    const wrapper = shallow(<SpaceComponent theme={theme} />);
    expect(wrapper.find('div').prop('style')!.height).toBe('30px');
  });

  describe('when horizontal flag is on', () => {
    it('sets height to 1', () => {
      const wrapper = shallow(<SpaceComponent theme={defaultTheme} horizontal={true}/>);
      expect(wrapper.find('div').prop('style')!.height).toBe('1px');
    });
  });

  describe('when vertical flag is on', () => {
    it('sets width to 1', () => {
      const wrapper = shallow(<SpaceComponent theme={defaultTheme} vertical={true}/>);
      expect(wrapper.find('div').prop('style')!.width).toBe('1px');
    });
  });
});
