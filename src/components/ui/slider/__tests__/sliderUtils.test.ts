import {
  convertTimesToSliderValue,
  convertTimeToSliderValue,
  convertToTimeLabel,
  generateMarks,
  getStringValue,
  getValue,
  makeTwoDigit,
} from '../sliderUtils';
import { Time } from '../TimeSlider';

describe('sliderUtils', () => {
  describe('getValue', () => {
    describe('max 24', () => {
      const max = 24;

      it('returns 00:00 for 0', () => {
        expect(getValue(0, max)).toEqual({
          hours: 0,
          minutes: 0,
        });
      });

      it('returns 00:00 for 1', () => {
        expect(getValue(1, max)).toEqual({
          hours: 1,
          minutes: 0,
        });
      });

      it('returns 24:00 for 24', () => {
        expect(getValue(max, max)).toEqual({
          hours: 24,
          minutes: 0,
        });
      });
    });

    describe('max 48', () => {
      const max = 48;

      it('returns 00:00 for 0', () => {
        expect(getValue(0, max)).toEqual({
          hours: 0,
          minutes: 0,
        });
      });

      it('returns 00:30 for 1', () => {
        expect(getValue(1, max)).toEqual({
          hours: 0,
          minutes: 30,
        });
      });

      it('returns 01:00 for 2', () => {
        expect(getValue(2, max)).toEqual({
          hours: 1,
          minutes: 0,
        });
      });

      it('returns 01:30 for 3', () => {
        expect(getValue(3, max)).toEqual({
          hours: 1,
          minutes: 30,
        });
      });

      it('returns 24:00 for 48', () => {
        expect(getValue(max, max)).toEqual({
          hours: 24,
          minutes: 0,
        });
      });
    });
  });

  describe('getStringValue', () => {
    describe('max 24', () => {
      const max = 24;

      it('returns 00:00 for 0', () => {
        expect(getStringValue(0, max)).toBe('00:00');
      });

      it('returns 00:00 for 1', () => {
        expect(getStringValue(1, max)).toBe('01:00');
      });

      it('returns 24:00 for 24', () => {
        expect(getStringValue(max, max)).toBe('24:00');
      });
    });

    describe('max 48', () => {
      const max = 48;

      it('returns 00:00 for 0', () => {
        expect(getStringValue(0, max)).toBe('00:00');
      });

      it('returns 00:30 for 1', () => {
        expect(getStringValue(1, max)).toBe('00:30');
      });

      it('returns 01:00 for 2', () => {
        expect(getStringValue(2, max)).toBe('01:00');
      });

      it('returns 01:30 for 3', () => {
        expect(getStringValue(3, max)).toBe('01:30');
      });

      it('returns 24:00 for 48', () => {
        expect(getStringValue(max, max)).toBe('24:00');
      });
    });
  });

  describe('convertToTimeLabel', () => {
    it('works', () => {
      expect(convertToTimeLabel(0, 0)).toBe('00:00');
      expect(convertToTimeLabel(0, 10)).toBe('00:10');
      expect(convertToTimeLabel(1, 0)).toBe('01:00');
      expect(convertToTimeLabel(1, 10)).toBe('01:10');
      expect(convertToTimeLabel(2, 0)).toBe('02:00');
      expect(convertToTimeLabel(24, 0)).toBe('24:00');
    });
  });

  describe('makeTwoDigit', () => {
    it('works', () => {
      expect(makeTwoDigit(1)).toBe('01');
      expect(makeTwoDigit(10)).toBe('10');
    });
  });

  describe('convertTimeToSliderValue', () => {
    it('works', () => {
      expect(
        convertTimeToSliderValue(
          {
            hours: 1,
            minutes: 0,
          },
          24,
        ),
      ).toBe(1);

      expect(
        convertTimeToSliderValue(
          {
            hours: 1,
            minutes: 30,
          },
          48,
        ),
      ).toBe(3);
    });

    it('rounds hours down', () => {
      expect(
        convertTimeToSliderValue(
          {
            hours: 3,
            minutes: 0,
          },
          12,
        ),
      ).toBe(1);
    });

    it('rounds minutes down', () => {
      expect(
        convertTimeToSliderValue(
          {
            hours: 1,
            minutes: 30,
          },
          24,
        ),
      ).toBe(1);
    });
  });

  describe('convertTimesToSliderValue', () => {
    it('works', () => {
      const max = 24;
      const time1: Time = {
        hours: 2,
        minutes: 0,
      };
      const time2: Time = {
        hours: 2,
        minutes: 0,
      };
      expect(convertTimesToSliderValue([time1, time2], max)).toEqual([
        convertTimeToSliderValue(time1, max),
        convertTimeToSliderValue(time2, max),
      ]);
    });
  });

  describe('generateMarks', () => {
    describe('when showMarks is true', () => {
      describe('when numberOfMarks is defined', () => {
        it('generates interval that ends in max', () => {
          const max = 60 * 24;
          const marksInterval = 8 * 60;
          expect(generateMarks(true, 0, max, marksInterval)).toEqual({
            0: getStringValue(0, max),
            [marksInterval]: getStringValue(marksInterval, max),
            [2 * marksInterval]: getStringValue(2 * marksInterval, max),
            [max]: getStringValue(max, max),
          });
        });

        it('generates interval that does not end in max', () => {
          const max = 60 * 24;
          const marksInterval = 10 * 60;
          expect(generateMarks(true, 0, max, marksInterval)).toEqual({
            0: getStringValue(0, max),
            [marksInterval]: getStringValue(marksInterval, max),
            [2 * marksInterval]: getStringValue(2 * marksInterval, max),
            [max]: getStringValue(max, max),
          });
        });
      });

      describe('when numberOfMarks is not defined', () => {
        it('generates from step', () => {
          const max = 24 * 60;
          const step = 12 * 60;
          expect(generateMarks(true, step, max, undefined)).toEqual({
            0: getStringValue(0, max),
            [step]: getStringValue(step, max),
            [max]: getStringValue(max, max),
          });
        });
      });
    });

    describe('when showMarks is false', () => {
      it('returns undefined', () => {
        expect(generateMarks(false, 0, 0)).toBe(undefined);
      });
    });
  });
});
