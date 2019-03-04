import { shallow } from 'enzyme';
import { Range } from 'rc-slider';
import * as React from 'react';
import { defaultTheme } from '../../../../themes/DefaultTheme';
import { UseTheme } from '../../../theme';
import { WithThemeProps } from '../../../util/enhancers';
import { createSlider, SliderProps } from '../Slider';

const Slider = createSlider(Range);

/**
 * TODO Wait for Enzyme to support React 16.3 Context API
 */
xdescribe('Slider', () => {
  const props: SliderProps & WithThemeProps = {
    marks: { 1: '3' },
    max: 10,
    min: 0,
    onChange: jest.fn(),

    theme: defaultTheme,
    value: [5, 2],
  };

  it('renders Range', () => {
    const wrapper = shallow(
      <UseTheme theme={{}}>
        <Slider {...props} />
      </UseTheme>,
    );
    const sliderWrapper = wrapper.find(Slider);

    const x = sliderWrapper.dive().dive();
    const rangeWrapper = sliderWrapper
      .dive()
      .dive()
      .find(Range);
    expect(rangeWrapper.length).toBe(1);
    expect(rangeWrapper.prop('max')).toBe(props.max);
    expect(rangeWrapper.prop('min')).toBe(props.min);
    expect(rangeWrapper.prop('onChange')).toBe(props.onChange);
    expect(rangeWrapper.prop('value')).toBe(props.value);
    expect(rangeWrapper.prop('step')).toBe(props.step);
    expect(rangeWrapper.prop('marks')).toBe(props.marks);
    expect(true).toBe(false);
  });
});
