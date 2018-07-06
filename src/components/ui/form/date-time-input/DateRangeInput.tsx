import { format } from 'date-fns';
import * as React from 'react';
import { compose, defaultProps, withHandlers, withState } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers';
import { Background } from '../../colors';
import { Border } from '../../decorations';
import { Column, Row, Space } from '../../layout';
import { Overlay } from '../../overlay';
import { Absolute, Relative } from '../../positioning';
import { DefaultText } from '../../text';
import { CalendarDay } from '../calendar/components/renderers/CalendarDay';
import { DateRangeCalendar } from '../calendar/DateRangeCalendar';
import {
  DateRangeCalendarOnChangeValue,
  DateRangeFocusedInput,
  OnChangePropsDateRangeSelection,
} from '../calendar/features/DateRangeSelection';
import { DefaultTextInput } from '../text-input';

export interface DateRangeInputProps extends OnChangePropsDateRangeSelection {
  /** The current date range value */
  value: DateRangeCalendarOnChangeValue;

  /**
   * The date format in the input field. See date-fns docs.
   * @default YYYY-MM-dd
   */
  displayFormat?: string;

  /**
   * Placeholder for start date field when no date has been selected.
   * @default Select date
   */
  placeholderStartDate?: string;

  /**
   * Placeholder for end date field when no date has been selected.
   * @default Select date
   */
  placeholderEndDate?: string;

  /**
   * Z-index of the calendar overlay.
   * @default 100
   */
  zIndex?: number;

  /**
   * Text between the inputs.
   * @default to
   */
  toText?: string;
}

export interface DateRangeInputPropsWithDefaultProps {
  displayFormat: string;
  placeholderStartDate: string;
  placeholderEndDate: string;
}

// tslint:disable:no-empty
const noop = () => {};

type InnerProps = DateRangeInputProps &
  WithShowingCalendarStateProps &
  WithShowCalendarHandlers &
  WithOnSelectDateHandler &
  WithFocusedInputStateProps &
  DateRangeInputPropsWithDefaultProps &
  WithThemeProps;

const DateRangeInputComponent = ({
  showCalendarStartDate,
  showCalendarEndDate,
  hideCalendar,
  displayFormat,
  showingCalendar,
  placeholderStartDate,
  placeholderEndDate,
  onSelectDateRange,
  value,
  zIndex,
  setStartDate,
  setEndDate,
  focusedInput,
  setFocusedInput,
  toText = 'to',
  theme,
}: InnerProps) => (
  <Column>
    <Row alignItems={'center'}>
      <DefaultTextInput
        onFocus={showCalendarStartDate}
        value={value.startDate ? format(value.startDate, displayFormat) : ''}
        placeholder={placeholderStartDate}
        onChange={noop}
        size={9}
        border={
          focusedInput === 'startDate' && showingCalendar
            ? theme.components.DateRangeInput.highlightBorder
            : undefined
        }
      />
      <Space />
      <DefaultText>{toText}</DefaultText>
      <Space />
      <DefaultTextInput
        onFocus={showCalendarEndDate}
        value={value.endDate ? format(value.endDate, displayFormat) : ''}
        placeholder={placeholderEndDate}
        onChange={noop}
        size={9}
        border={
          focusedInput === 'endDate' && showingCalendar
            ? theme.components.DateRangeInput.highlightBorder
            : undefined
        }
      />
    </Row>
    {showingCalendar && (
      <Relative>
        <Overlay onClickOutside={hideCalendar} backgroundOpacity={0} />
        <Absolute zIndex={zIndex}>
          <Border color={theme.components.DateRangeInput.borderColor}>
            <Background color={theme.components.DateRangeInput.backgroundColor}>
              <DateRangeCalendar
                dayComponent={CalendarDay}
                onChange={onSelectDateRange}
                startDate={value.startDate}
                endDate={value.endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                theme={theme.components.DateRangeInput.calendar}
              />
            </Background>
          </Border>
        </Absolute>
      </Relative>
    )}
  </Column>
);

interface WithShowingCalendarStateProps {
  showingCalendar: boolean;
  setShowingCalendar: (showingCalendar: boolean) => void;
}

const withShowingCalendarState = withState(
  'showingCalendar',
  'setShowingCalendar',
  false,
);

interface WithFocusedInputStateProps {
  focusedInput: DateRangeFocusedInput;
  setFocusedInput: (focusedInput: DateRangeFocusedInput) => void;
}

const withFocusedInputState = withState(
  'focusedInput',
  'setFocusedInput',
  undefined,
);

interface WithShowCalendarHandlers {
  showCalendarStartDate: () => boolean;
  showCalendarEndDate: () => boolean;
  hideCalendar: () => void;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
}

const withShowCalendarHandlers = withHandlers<
  WithShowingCalendarStateProps &
    DateRangeInputProps &
    WithFocusedInputStateProps,
  WithShowCalendarHandlers
>({
  showCalendarStartDate: ({ setShowingCalendar, setFocusedInput }) => () => {
    setFocusedInput('startDate');
    setShowingCalendar(true);
    return true;
  },
  showCalendarEndDate: ({ setShowingCalendar, setFocusedInput }) => () => {
    setFocusedInput('endDate');
    setShowingCalendar(true);
    return true;
  },
  hideCalendar: ({ setShowingCalendar }) => () => {
    setShowingCalendar(false);
  },
  setStartDate: ({ value, onChange, setShowingCalendar, focusedInput }) => (
    startDate: Date,
  ) => {
    if (onChange) {
      onChange({ startDate, endDate: value.endDate });
    }
    if (focusedInput === 'endDate') {
      setTimeout(() => setShowingCalendar(false), 150);
    }
  },
  setEndDate: ({ value, onChange, setShowingCalendar, focusedInput }) => (
    endDate: Date,
  ) => {
    if (onChange) {
      onChange({ startDate: value.startDate, endDate });
    }
    if (focusedInput === 'endDate') {
      setTimeout(() => setShowingCalendar(false), 150);
    }
  },
});

interface WithOnSelectDateHandler {
  onSelectDateRange: (dateRange: DateRangeCalendarOnChangeValue) => void;
}

const withOnSelectDateHandler = withHandlers<
  WithShowingCalendarStateProps &
    DateRangeInputProps &
    WithShowCalendarHandlers,
  WithOnSelectDateHandler
>({
  onSelectDateRange: ({ setShowingCalendar, onChange, hideCalendar }) => (
    dateRange: DateRangeCalendarOnChangeValue,
  ) => {
    if (onChange) {
      onChange(dateRange);
    }
  },
});

const withDefaultProps = defaultProps<Partial<DateRangeInputProps>>({
  displayFormat: 'YYYY-MM-dd',
  placeholderStartDate: 'Select date',
  placeholderEndDate: 'Select date',
  zIndex: 100,
});

export const DateRangeInput = compose<InnerProps, DateRangeInputProps>(
  withDefaultProps,
  withShowingCalendarState,
  withFocusedInputState,
  withShowCalendarHandlers,
  withOnSelectDateHandler,
  withTheme,
)(DateRangeInputComponent);
