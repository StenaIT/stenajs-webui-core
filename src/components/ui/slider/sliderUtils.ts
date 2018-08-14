import { Marks, Time } from './TimeSlider';

export const makeTwoDigit = (value: number): string => {
  let valueString = value.toString(10);
  if (valueString.length === 1) {
    return `0${value}`;
  }
  return valueString;
};

export const convertToTimeLabel = (hours: number, minutes: number): string => {
  return `${makeTwoDigit(hours)}:${makeTwoDigit(minutes)}`;
};

export const getValue = (value: number, max: number): Time => {
  const minutesPerValue = 60 * 24 / max;
  const time = value * minutesPerValue;
  return {
    hours: Math.floor(time / 60),
    minutes: time % 60,
  };
};

export const getStringValue = (value: number, max: number): string => {
  const time = getValue(value, max);
  return convertToTimeLabel(time.hours, time.minutes);
};

export const convertTimeToSliderValue = (time: Time, max: number): number => {
  const hourValue = Math.floor(max / 24 * time.hours);
  const minuteValue = Math.floor(max / 24 / 60 * time.minutes);
  return hourValue + minuteValue;
};

export const convertTimesToSliderValue = (
  times: Time[],
  max: number,
): number[] => {
  return times.map(time => convertTimeToSliderValue(time, max));
};

export const generateMarks = (
  showMarks: boolean,
  step: number,
  max: number,
  marksInterval?: number,
): Marks | undefined => {
  if (showMarks) {
    if (marksInterval) {
      return generateValues(marksInterval, max);
    }
    return generateValues(step, max);
  }
  return undefined;
};

const generateValues = (minuteInterval: number, max: number): Marks => {
  const marks = {
    0: convertToTimeLabel(0, 0),
    [max]: convertToTimeLabel(24, 0),
  };
  let value = minuteInterval;
  while (value < max) {
    const time = getValue(value, max);
    marks[value] = convertToTimeLabel(time.hours, time.minutes);
    value = value + minuteInterval;
  }
  return marks;
};
