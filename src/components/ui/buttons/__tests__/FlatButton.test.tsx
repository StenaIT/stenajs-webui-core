import * as React from 'react';
import { shallow } from 'enzyme';
import { FlatButtonComponent } from '../FlatButton';
import { defaultFlatButtonTheme } from '../FlatButtonTheme';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { Button } from '../Button';

const flatButtonTheme = defaultTheme.components.FlatButton;

describe('FlatButton', () => {
  it('use color from theme', () => {
    const wrapper = shallow(<FlatButtonComponent theme={flatButtonTheme} />);
    expect(wrapper.find(Button).prop('textColor')).toBe(
      defaultFlatButtonTheme.textColor,
    );
  });

  it('use color from prop when specified', () => {
    const wrapper = shallow(
      <FlatButtonComponent theme={flatButtonTheme} textColor={'#fff'} />,
    );
    expect(wrapper.find(Button).prop('textColor')).toBe('#fff');
  });

  it('use disabled color from theme if disabled', () => {
    const wrapper = shallow(
      <FlatButtonComponent theme={flatButtonTheme} disabled />,
    );
    expect(wrapper.find(Button).prop('textColor')).toBe(
      defaultFlatButtonTheme.disabledTextColor,
    );
  });
});
