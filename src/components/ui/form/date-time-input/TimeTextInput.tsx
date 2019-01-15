import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { useState } from 'react';
import * as React from 'react';
import { formattingTimeString, validUserInput } from '../../../../util/time';
import { useTheme } from '../../../theme/UseThemeHook';
import { Icon } from '../../icon';
import {
  DefaultTextInput,
  DefaultTextInputProps,
} from '../text-input/DefaultTextInput';

interface TimeTextInputProps extends DefaultTextInputProps {
  /** Onchange callback, returns the current value */
  onChange: (value: string) => void;
  /** Show/Hide placeholder */
  showPlaceHolder?: boolean;
  /** Show/Hide icon */
  useIcon?: boolean;
}

export const TimeTextInput: React.FC<TimeTextInputProps> = ({
  onChange,
  showPlaceHolder = true,
  useIcon = true,
  value,
  width = '50px',
  ...props
}) => {
  const [valid, setValid] = useState(validUserInput(value));
  const timeFormat = 'hh:mm';

  const theme = useTheme();

  const onBlur = () => {
    if (value) {
      const formattedResult = formattingTimeString(value);
      setValid(formattedResult.success);
      if (formattedResult.success) {
        onChange(formattedResult.time);
      }
    }
  };

  const updateValue = (time: string) => {
    const validInput = validUserInput(time);

    setValid(validInput && time.length <= timeFormat.length);

    onChange(time);
  };

  return (
    <DefaultTextInput
      {...props}
      backgroundColor={valid ? undefined : theme.colors.errorBgLight}
      contentLeft={useIcon && <Icon name={faClock} />}
      value={value}
      placeholder={showPlaceHolder ? timeFormat : undefined}
      onChange={updateValue}
      onBlur={onBlur}
      width={width}
    />
  );
};
