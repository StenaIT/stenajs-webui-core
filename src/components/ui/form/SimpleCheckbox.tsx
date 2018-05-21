import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Clickable } from '../interaction/Clickable';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface SimpleCheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  colorOn?: string;
  colorOff?: string;
  colorDisabled?: string;
  disabled?: boolean;
}

class SimpleCheckboxComponent extends React.Component<
  SimpleCheckboxProps & WithThemeProps
> {
  onChange = () => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(!value);
    }
  };

  render() {
    const {
      value,
      colorOn,
      colorOff,
      colorDisabled,
      disabled,
      theme,
    } = this.props;
    return (
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
    );
  }
}

export const SimpleCheckbox = compose<
  SimpleCheckboxProps & WithThemeProps,
  SimpleCheckboxProps
>(withTheme)(SimpleCheckboxComponent);

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
