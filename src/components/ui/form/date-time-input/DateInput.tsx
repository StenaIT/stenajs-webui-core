import { format } from 'date-fns';
import * as React from 'react';
import { compose, defaultProps, withHandlers, withState } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers';
import { Background } from '../../colors';
import { Border } from '../../decorations';
import { Overlay } from '../../overlay';
import { Absolute, Relative } from '../../positioning';
import { CalendarDay } from '../calendar/components/renderers/CalendarDay';
import { SingleDateCalendar } from '../calendar/SingleDateCalendar';
import { DefaultTextInput } from '../text-input';

export interface DateInputProps {
  /** The current value */
  value?: Date;
  /** onChange handler for when the user selects a date. */
  onChange?: (date: Date | undefined) => void;
  /**
   * The date format in the input field. See date-fns docs.
   * @default YYYY-MM-dd
   */
  displayFormat?: string;
  /**
   * Placeholder when no date has been selected.
   * @default Enter date
   */
  placeholder?: string;
  /**
   * Z-index of the calendar overlay.
   * @default 100
   */
  zIndex?: number;
}

export interface DateInputPropsWithDefaultProps {
  displayFormat: string;
  placeholder: string;
}

// tslint:disable:no-empty
const noop = () => {};

type InnerProps = DateInputProps &
  WithShowingCalendarStateProps &
  WithShowCalendarHandlers &
  WithOnSelectDateHandler &
  DateInputPropsWithDefaultProps &
  WithThemeProps;

const DateInputComponent = ({
  showCalendar,
  hideCalendar,
  displayFormat,
  showingCalendar,
  placeholder,
  onSelectDate,
  value,
  zIndex,
  theme,
}: InnerProps) => (
  <>
    <DefaultTextInput
      onFocus={showCalendar}
      value={value ? format(value, displayFormat) : ''}
      placeholder={placeholder}
      onChange={noop}
      size={9}
    />
    {showingCalendar && (
      <Relative>
        <Overlay onClickOutside={hideCalendar} backgroundOpacity={0} />
        <Absolute zIndex={zIndex}>
          <Border color={theme.components.DateInput.borderColor}>
            <Background color={theme.components.DateInput.backgroundColor}>
              <SingleDateCalendar
                dayComponent={CalendarDay}
                onChange={onSelectDate}
                value={value}
                theme={theme.components.DateInput.calendar}
              />
            </Background>
          </Border>
        </Absolute>
      </Relative>
    )}
  </>
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

interface WithShowCalendarHandlers {
  showCalendar: () => boolean;
  hideCalendar: () => void;
}

const withShowCalendarHandlers = withHandlers<
  WithShowingCalendarStateProps,
  WithShowCalendarHandlers
>({
  showCalendar: ({ setShowingCalendar }) => () => {
    setShowingCalendar(true);
    return true;
  },
  hideCalendar: ({ setShowingCalendar }) => () => {
    setShowingCalendar(false);
  },
});

interface WithOnSelectDateHandler {
  onSelectDate: (date: Date | undefined) => void;
}

const withOnSelectDateHandler = withHandlers<
  WithShowingCalendarStateProps & DateInputProps & WithShowCalendarHandlers,
  WithOnSelectDateHandler
>({
  onSelectDate: ({ setShowingCalendar, onChange, hideCalendar }) => (
    date: Date | undefined,
  ) => {
    if (onChange) {
      onChange(date);
    }
    setTimeout(hideCalendar, 150);
  },
});

const withDefaultProps = defaultProps<Partial<DateInputProps>>({
  displayFormat: 'YYYY-MM-dd',
  placeholder: 'Enter date',
  zIndex: 100,
});

export const DateInput = compose<InnerProps, DateInputProps>(
  withDefaultProps,
  withShowingCalendarState,
  withShowCalendarHandlers,
  withOnSelectDateHandler,
  withTheme,
)(DateInputComponent);
