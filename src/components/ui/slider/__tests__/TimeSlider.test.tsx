import { shallow } from 'enzyme';
import { Range } from 'rc-slider';
import * as React from 'react';
import { createSlider } from '../Slider';
import {
  convertTimesToSliderValue,
  generateMarks,
  getValue,
} from '../sliderUtils';
import { createTimeSlider, TimeSliderProps } from '../TimeSlider';

const Slider = createSlider(Range);
const TimeSlider = createTimeSlider(Range);

xdescribe('TimeSlider', () => {
  const props: TimeSliderProps = {
    onChange: jest.fn(),
    step: 2,
    value: [{ hours: 12, minutes: 30 }, { hours: 5, minutes: 0 }],
  };

  describe('Slider', () => {
    it('is rendered', () => {
      const wrapper = shallow(<TimeSlider {...props} />);
      expect(wrapper.type()).toBe(Slider);
    });

    it('is passed max', () => {
      const step = 4;
      const wrapper = shallow(<TimeSlider {...props} step={step} />);
      expect(wrapper.find(Slider).prop('max')).toBe(60 * 24);
    });

    it('is passed min', () => {
      const wrapper = shallow(<TimeSlider {...props} />);
      expect(wrapper.find(Slider).prop('min')).toBe(0);
    });

    it('is passed onChange', () => {
      const step = 4;
      const values = [1, 2];
      const max = 60 * 24;
      const wrapper = shallow(<TimeSlider {...props} step={step} />);
      wrapper.find(Slider).prop('onChange')(values);
      expect(props.onChange).toHaveBeenLastCalledWith([
        getValue(values[0], max),
        getValue(values[1], max),
      ]);
    });

    it('is passed value', () => {
      const step = 6;
      const value = [{ hours: 4, minutes: 0 }, { hours: 3, minutes: 30 }];
      const wrapper = shallow(
        <TimeSlider {...props} step={step} value={value} />,
      );
      expect(wrapper.find(Slider).prop('value')).toEqual(
        convertTimesToSliderValue(value, 60 * 24),
      );
    });

    it('is passed step', () => {
      const step = 4;
      const wrapper = shallow(<TimeSlider {...props} step={step} />);
      expect(wrapper.find(Slider).prop('step')).toBe(step);
    });

    it('is passed marks', () => {
      const showMarks = true;
      const step = 8;
      const marksInterval = 12;
      const wrapper = shallow(
        <TimeSlider
          {...props}
          marksInterval={marksInterval}
          showMarks={showMarks}
          step={step}
        />,
      );
      expect(wrapper.find(Slider).prop('marks')).toEqual(
        generateMarks(showMarks, step, 60 * 24, marksInterval),
      );
    });
  });
});
