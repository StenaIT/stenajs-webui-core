import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt';
import { format, isValid, parse } from 'date-fns';
import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '../../../theme/UseThemeHook';
import { Background } from '../../colors';
import { Border } from '../../decorations';
import { Icon } from '../../icon';
import { Clickable } from '../../interaction';
import { Indent } from '../../layout';
import { Overlay } from '../../overlay';
import { Absolute, Relative } from '../../positioning';
import { SingleDateCalendar } from '../calendar';
import { DefaultTextInput, DefaultTextInputProps } from '../text-input';

interface DateTextInputProps extends DefaultTextInputProps {
  dateFormat?: string;
  disableCalender?: boolean;
  hideCalender?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  zIndex?: number;
}

export const DateTextInput: React.FC<DateTextInputProps> = ({
  dateFormat = 'yyyy-MM-dd',
  disableCalender = false,
  hideCalender = false,
  onChange,
  placeholder = 'YYYY-MM-DD',
  value,
  width = '100px',
  zIndex = 100,
}) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const toggleCalendar = () => {
    setOpen(!open);
  };

  const updateValue = (date: string) => {
    onChange(date);
  };

  const calendar = disableCalender ? (
    <Icon name={faCalendarAlt} />
  ) : (
    !hideCalender && (
      <Clickable onClick={toggleCalendar}>
        <Icon name={faCalendarAlt} />
      </Clickable>
    )
  );

  const onCalendarSelectDate = (date: Date | undefined) => {
    if (date) {
      updateValue(format(date, dateFormat));
    }
  };

  const validInput = value && !/^[-/0-9]+$/.test(value);

  const dateIsValid = value && isValid(parse(value, dateFormat, new Date()));

  const userInputCorrectLength = value && value.length >= dateFormat.length;

  return (
    <>
      <DefaultTextInput
        contentLeft={calendar}
        placeholder={placeholder}
        value={value}
        onChange={updateValue}
        backgroundColor={
          (userInputCorrectLength && !dateIsValid) || validInput
            ? theme.colors.errorBgLight
            : undefined
        }
        width={width}
      />
      {open && (
        <Relative>
          <Overlay onClickOutside={toggleCalendar} backgroundOpacity={0} />
          <Absolute zIndex={zIndex}>
            <Border color={theme.components.DateInput.borderColor}>
              <Background color={theme.components.DateInput.backgroundColor}>
                <Indent>
                  <SingleDateCalendar
                    onChange={onCalendarSelectDate}
                    value={
                      value && dateIsValid
                        ? parse(value, dateFormat, new Date())
                        : undefined
                    }
                    theme={theme.components.DateInput.calendar}
                  />
                </Indent>
              </Background>
            </Border>
          </Absolute>
        </Relative>
      )}
    </>
  );
};
