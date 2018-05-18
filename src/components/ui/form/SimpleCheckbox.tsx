import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Clickable } from '../interaction/Clickable';
import { GetTheme } from '../../theme/GetTheme';

export interface SimpleCheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  colorOn?: string;
  colorOff?: string;
  colorDisabled?: string;
  disabled?: boolean;
}

export class SimpleCheckbox extends React.Component<SimpleCheckboxProps> {
  onChange = () => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(!value);
    }
  };

  render() {
    const { value, colorOn, colorOff, colorDisabled, disabled } = this.props;
    return (
      <GetTheme>
        {theme => (
          <Clickable onClick={disabled ? undefined : this.onChange}>
            <FontAwesomeIcon
              icon={
                value
                  ? theme.components.SimpleCheckbox.iconOn
                  : theme.components.SimpleCheckbox.iconOff
              }
              color={getColor(
                value,
                disabled,
                colorOn || theme.components.SimpleCheckbox.colorOn,
                colorOff || theme.components.SimpleCheckbox.colorOff,
                colorDisabled || theme.components.SimpleCheckbox.colorDisabled,
              )}
            />
          </Clickable>
        )}
      </GetTheme>
    );
  }
}

const getColor = (
  value?: boolean,
  disabled?: boolean,
  colorOn?: string,
  colorOff?: string,
  colorDisabled?: string,
): string | undefined => {
  if (disabled) {
    return colorDisabled;
  }
  if (value && colorOn) {
    return colorOn;
  }
  if (!value && colorOff) {
    return colorOff;
  }
  return undefined;
};
