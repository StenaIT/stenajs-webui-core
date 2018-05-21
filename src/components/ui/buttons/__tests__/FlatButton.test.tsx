import * as React from 'react';
import { shallow } from 'enzyme';
import { FlatButtonComponent } from '../FlatButton';
import { defaultFlatButtonTheme } from '../FlatButtonTheme';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { Button } from '../Button';

describe('FlatButton', () => {
  it('use color from theme', () => {
    const wrapper = shallow(<FlatButtonComponent theme={defaultTheme} />);
    expect(wrapper.find(Button).prop('textColor')).toBe(
      defaultFlatButtonTheme.textColor,
    );
  });

  it('use color from prop when specified', () => {
    const wrapper = shallow(
      <FlatButtonComponent theme={defaultTheme} textColor={'#fff'} />,
    );
    expect(wrapper.find(Button).prop('textColor')).toBe('#fff');
  });

  it('use disabled color from theme if disabled', () => {
    const wrapper = shallow(
      <FlatButtonComponent theme={defaultTheme} disabled />,
    );
    expect(wrapper.find(Button).prop('textColor')).toBe(
      defaultFlatButtonTheme.disabledTextColor,
    );
  });
});
