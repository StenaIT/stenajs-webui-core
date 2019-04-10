import { Color } from 'csstype';
import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers';
import {
  WithOnToggleHandler,
  withOnToggleHandler,
} from '../../../util/enhancers/withOnToggleHandler';
import { Icon } from '../../icon/Icon';
import { Clickable } from '../../interaction/Clickable';
import { Row } from '../../layout/Row';
import { ValueOnChangeProps } from '../types';
import { RadioButtonTheme } from './RadioButtonTheme';

export interface RadioButtonProps extends ValueOnChangeProps<boolean> {
  disabled?: boolean;
}

type InnerProps = WithOnToggleHandler &
  WithInnerComponentThemeProps<RadioButtonTheme> &
  RadioButtonProps;

export const RadioButtonComponent: React.FC<InnerProps> = ({
  disabled,
  onChange,
  onToggle,
  theme,
  value,
}) => {
  let iconColor: Color = theme.iconColor;
  if (disabled) {
    iconColor = theme.disabledIconColor;
  } else if (!value) {
    iconColor = theme.notCheckedColor;
  }

  return (
    <Row>
      <Clickable onClick={disabled ? undefined : onToggle}>
        <Icon
          color={iconColor}
          name={value ? theme.checkedIcon : theme.notCheckedIcon}
          size={theme.iconSize}
        />
      </Clickable>
    </Row>
  );
};

interface ThemeProp {
  theme?: RadioButtonTheme;
}

export const RadioButton = setDisplayName<RadioButtonProps & ThemeProp>(
  'RadioButton',
)(
  compose<InnerProps, RadioButtonProps & ThemeProp>(
    pure,
    withOnToggleHandler,
    withComponentTheme('RadioButton'),
  )(RadioButtonComponent),
);
