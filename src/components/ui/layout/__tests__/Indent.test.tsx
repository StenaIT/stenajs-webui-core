import { shallow } from 'enzyme';
import { merge } from 'lodash';
import * as React from 'react';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { Theme } from '../../../../themes/Theme';
import { IndentComponent } from '../Indent';

describe('IndentComponent', () => {
  it('should have a div with width and height', () => {
    const wrapper = shallow(<IndentComponent theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.marginLeft).toBe('10px');
    expect(wrapper.find('div').prop('style')!.marginRight).toBe('10px');
  });

  it('should have a div with double width and height when num=2', () => {
    const wrapper = shallow(<IndentComponent num={2} theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.marginLeft).toBe('20px');
    expect(wrapper.find('div').prop('style')!.marginRight).toBe('20px');
  });

  it('should have a div with half width and height when half=true', () => {
    const wrapper = shallow(<IndentComponent half theme={defaultTheme} />);
    expect(wrapper.find('div').prop('style')!.marginLeft).toBe('5px');
    expect(wrapper.find('div').prop('style')!.marginRight).toBe('5px');
  });

  it('should use theme.metrics.indent as marginLeft', () => {
    const theme: Theme = merge({}, defaultTheme, { metrics: { indent: 30 } });
    const wrapper = shallow(<IndentComponent theme={theme} />);
    expect(wrapper.find('div').prop('style')!.marginLeft).toBe('30px');
  });

  it('should use theme.metrics.indent as marginRight', () => {
    const theme: Theme = merge({}, defaultTheme, { metrics: { indent: 30 } });
    const wrapper = shallow(<IndentComponent theme={theme} />);
    expect(wrapper.find('div').prop('style')!.marginRight).toBe('30px');
  });
});
