import * as React from 'react';
import { ComponentClass } from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import { createSlider, SliderProps } from './Slider';
import {
  convertTimesToSliderValue,
  generateMarks,
  getValue,
} from './sliderUtils';

export declare type __C_TIME_SLIDER = ComponentClass<{}>;

export interface Marks {
  [key: number]:
    | JSX.Element
    | string
    | { style: {}; label: string | JSX.Element };
}

export interface Time {
  /** hours */
  hours: number;
  /** minutes */
  minutes: number;
}

export interface TimeSliderProps {
  /** onChange will be triggered while the value of Slider changing */
  onChange: (value: { hours: number; minutes: number }[]) => void;
  /** In minutes, value to be added or subtracted on each step the slider makes, must be greater than zero */
  step?: number;
  /** Set current positions of handles */
  value: { hours: number; minutes: number }[];
  /** If true, show marks on slider. Marks defaults to step interval if marksInterval is undefined */
  showMarks?: boolean;
  /** In minutes, show time marks on slider. If undefined, uses step instead.
   * Marks are only shown if showMarks is true
   */
  marksInterval?: number;
}

const TEN_MINUTES_STEP = 10;
const max = 60 * 24;
const min = 0;

type InnerProps = TimeSliderProps & WithOnSliderChange;

interface WithOnSliderChange {
  onChange(sliderValue: Array<number>): void;
}

const withOnSliderChange = withHandlers<TimeSliderProps, WithOnSliderChange>({
  onChange: ({ onChange: onSliderChange }) => sliderValue => {
    onSliderChange(sliderValue.map(time => getValue(time, max)));
  },
});

const withSliderProps = withProps<SliderProps, InnerProps>(
  ({
    showMarks = false,
    step = TEN_MINUTES_STEP,
    marksInterval,
    value,
    onChange,
  }) => ({
    marks: generateMarks(showMarks, step, max, marksInterval),
    max: max,
    min: min,
    onChange,
    value: convertTimesToSliderValue(value, max),
    step: step,
  }),
);

export const createTimeSlider = <TRangeProps extends {}>(
  rangeComponent: React.ComponentType<TRangeProps>,
) =>
  compose<SliderProps, TimeSliderProps>(
    withOnSliderChange,
    withSliderProps,
  )(createSlider(rangeComponent));
