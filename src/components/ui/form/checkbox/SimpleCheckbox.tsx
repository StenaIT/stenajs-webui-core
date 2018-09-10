import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { withTheme, WithThemeProps } from '../../../util/enhancers/WithTheme';
import { Clickable } from '../../interaction/Clickable';
import { ValueOnChangeProps } from '../types';

export interface SimpleCheckboxProps extends ValueOnChangeProps<boolean> {
  colorOn?: string;
  colorOff?: string;
  colorDisabled?: string;
  disabled?: boolean;
}

export interface WithOnChangeHandlerPropsForSimpleCheckboxComponent {
  onToggle: () => void;
}

export type InnerPropsForSimpleCheckboxComponent = SimpleCheckboxProps &
  WithOnChangeHandlerPropsForSimpleCheckboxComponent &
  WithThemeProps;

export const SimpleCheckboxComponent = ({
  value,
  colorOn,
  colorOff,
  colorDisabled,
  disabled,
  theme,
  onToggle,
}: InnerPropsForSimpleCheckboxComponent) => (
  <Clickable onClick={disabled ? undefined : onToggle}>
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

const withOnChangeHandler = withHandlers({
  onToggle: ({ onChange, value }: SimpleCheckboxProps) => () => {
    if (onChange) {
      onChange(!value);
    }
  },
});

export const SimpleCheckbox = compose<
  InnerPropsForSimpleCheckboxComponent,
  SimpleCheckboxProps
>(
  pure,
  withOnChangeHandler,
  withTheme,
)(SimpleCheckboxComponent);

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
