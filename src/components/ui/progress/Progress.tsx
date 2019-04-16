import * as React from 'react';
import styled from '@emotion/styled';
import { defaultColors } from '../../../themes/default-values';

export interface ProgressProps {
  /** Spinner track color */
  trackColor?: string;

  /** Loading background color */
  backgroundColor?: string;

  /** Opacity of icon. */
  opacity?: number;

  /** Size of icon. */
  size?: number;

  /** Size of "pie hole" in the middle. */
  width?: number;

  /** Override spinner props. */
  spinnerProps?: ProgressSpinnerProps;

  /** Overriding style. */
  style?: {};
}
export interface ProgressSpinnerProps {
  /** Spinner background color. */
  backgroundColor?: string;

  /** Speed for 360 degress. */
  duration?: number;

  /** Opacity. */
  opacity?: number;

  /** Size of icon. */
  size: number;

  /** Spinner track color */
  trackColor?: string;

  /** Size of "pie hole" in the middle. */
  width: number;
}

const Wrapper = styled('div')<{ size: number; margin?: number }>`
  height: ${({ size }) => size}px;
  box-sizing: border-box;
  position: relative;
  width: ${({ size }) => size}px;
`;
const ProgressSpinner = styled('div')<ProgressSpinnerProps>`
  animation-fill-mode: both;
  background-color: ${({ trackColor }) => trackColor || defaultColors.infoBlue};
  border-radius: 100%;
  box-sizing: inherit;
  display: block;
  height: ${({ size }) => size || 25}px;
  margin: 0 !important;
  width: ${({ size }) => size || 25}px;
  opacity: ${({ opacity }) => opacity || 1}px;
  position: relative;
  overflow: hidden;
  animation: rotate ${({ duration }) => duration || 2}s infinite linear;

  :before {
    content: '\\a0';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border: ${({ width }) => width || 2}px solid transparent;
    border-width: ${({ size }) =>
      `${size / 2}px ${size * 0.4}px 0px ${size * 0.4}px`};
    border-top-color: ${({ backgroundColor }) =>
      backgroundColor || defaultColors.white};
    z-index: 99999;
  }
  :after {
    content: '\\a0';
    position: absolute;
    top: 50%;
    left: 50%;
    height: ${({ size, width }) => size - width || 20}px;
    width: ${({ size, width }) => size - width || 20}px;
    border-radius: 100%;
    background: ${({ backgroundColor }) =>
      backgroundColor || defaultColors.white};
    transform: translate(-50%, -50%);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Progress = ({
  backgroundColor = defaultColors.white,
  trackColor = defaultColors.infoBlue,
  opacity = 1,
  size = 20,
  width,
  spinnerProps,
  style = {},
}: ProgressProps) => {
  const evenSize: number = 2 * Math.round((size - 1) / 2);
  const evenWidth: number = width || 2 * Math.round((evenSize * 0.3) / 2);

  return (
    <Wrapper margin={0} size={size} style={style}>
      <ProgressSpinner
        {...spinnerProps || {}}
        size={evenSize}
        opacity={opacity}
        width={evenWidth}
        backgroundColor={backgroundColor}
        trackColor={trackColor}
      />
    </Wrapper>
  );
};
