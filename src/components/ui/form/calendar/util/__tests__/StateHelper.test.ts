import { defaultColors } from '../../../../../../themes/default-values/DefaultColors';
import { DayState } from '../../components/Calendar';
import { dayHighlightSelect } from '../StateHelper';

describe('StateHelper', () => {
  describe('dayHighlightSelect', () => {
    it('returns value if boolean is true', () => {
      const dayState: DayState = {};
      const selected = dayHighlightSelect(dayState, [true], ['transparent']);
      expect(selected).toBe('transparent');
    });
    it('returns fallback if boolean is false', () => {
      const dayState: DayState = {};
      const selected = dayHighlightSelect(dayState, [false], ['transparent']);
      expect(selected).toBe(undefined);
    });
    it('returns value if highlight is set', () => {
      const dayState: DayState = {
        highlights: ['disabled'],
      };
      const selected = dayHighlightSelect(
        dayState,
        ['disabled'],
        ['transparent'],
      );
      expect(selected).toBe('transparent');
    });
  });
  it('returns fallback if there is no match', () => {
    const dayState: DayState = {
      highlights: ['selected'],
    };
    const selected = dayHighlightSelect(
      dayState,
      [false, false, 'disabled'],
      ['a', 'b', 'c'],
      'fallback',
    );
    expect(selected).toBe('fallback');
  });
  it('returns fallback if list is empty', () => {
    const dayState: DayState = {};
    const selected = dayHighlightSelect<string>(dayState, [], [], 'fallback');
    expect(selected).toBe('fallback');
  });
  it('returns value if true even when dayState is undefined', () => {
    const dayState = undefined;
    const selected = dayHighlightSelect(
      dayState,
      [true, 'selected', 'disabled'],
      ['transparent', defaultColors.white, defaultColors.disabledText],
    );

    expect(selected).toBe('transparent');
  });
});
