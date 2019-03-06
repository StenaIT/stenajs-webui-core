import styled from '@emotion/styled';
import * as React from 'react';
import { ComponentEnhancer, compose, defaultProps, nest } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers';
import { Marks } from './TimeSlider';

export declare type __C_SLIDER = ComponentEnhancer<{}, {}>;

const SliderWrapper = styled.div<WithThemeProps>`
  /* Copied from rc-slider/assets/index.css , all modifications are marked "MODIFIED" */

  .rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    -ms-touch-action: none;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${props => props.theme.components.Slider.railColor};
    height: 4px;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 6px;
    background-color: ${props => props.theme.components.Slider.trackColor};
  }
  .rc-slider-handle {
    position: absolute;
    margin-left: -7px;
    margin-top: -7px; /* MODIFIED */
    width: 18px; /* MODIFIED */
    height: 18px; /* MODIFIED */
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    border-radius: 50%;
    background-color: ${props => props.theme.components.Slider.handleColor};
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .rc-slider-handle:hover {
    border-color: ${props => props.theme.components.Slider.handleColor};
  }
  .rc-slider-handle:active {
    border-color: ${props => props.theme.components.Slider.handleColor};
    box-shadow: 0 0 5px ${props => props.theme.components.Slider.handleColor};
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .rc-slider-handle:focus {
    border-color: ${props => props.theme.components.Slider.handleColor};
    box-shadow: 0 0 0 5px ${props => props.theme.components.Slider.handleColor};
    outline: none;
  }
  .rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }
  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme.components.Slider.railMarkTextColor};
  }
  .rc-slider-mark-text-active {
    color: ${props => props.theme.components.Slider.trackMarkTextColor};
  }
  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .rc-slider-dot {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid ${props => props.theme.components.Slider.railColor};
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rc-slider-dot-active {
    border-color: ${props => props.theme.components.Slider.trackColor};
  }
`;

export interface SliderProps {
  /** Maximum value of the slider */
  max: number;
  /** Minimum value of the slider */
  min: number;
  /** onChange will be triggered while the value of Slider changing */
  onChange: (value: number[]) => void;
  /** Value to be added or subtracted on each step the slider makes, must be greater than zero */
  step?: number;
  /** Set current positions of handles */
  value: number[];
  /** Marks on the slider. The key determines the position, and the value determines what will show */
  marks?: Marks;
}

const withDefaultProps = defaultProps({ step: 1 });

export const createSlider = <TRangeProps extends {}>(
  rangeComponent: React.ComponentType<TRangeProps>,
) =>
  compose<TRangeProps & WithThemeProps, SliderProps>(
    withDefaultProps,
    withTheme,
  )(nest(SliderWrapper, rangeComponent));
