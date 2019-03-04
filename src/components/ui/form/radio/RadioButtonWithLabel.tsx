import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers';
import {
  WithOnToggleHandler,
  withOnToggleHandler,
} from '../../../util/enhancers/withOnToggleHandler';
import { Clickable } from '../../interaction/Clickable';
import { Row } from '../../layout/Row';
import { Space } from '../../layout/Space';
import { DefaultText } from '../../text/DefaultText';
import { ValueOnChangeProps } from '../types';
import { RadioButton } from './RadioButton';
import { RadioButtonTheme } from './RadioButtonTheme';

export interface RadioButtonWithLabelProps extends ValueOnChangeProps<boolean> {
  disabled?: boolean;
  label: string;
}

type InnerProps = WithOnToggleHandler &
  WithInnerComponentThemeProps<RadioButtonTheme> &
  RadioButtonWithLabelProps;

export const RadioButtonWithLabelComponent: React.SFC<InnerProps> = ({
  disabled,
  label,
  onToggle,
  theme,
  value,
}) => {
  return (
    <Clickable onClick={disabled ? undefined : onToggle}>
      <Row>
        <RadioButton {...{ theme }} value={value} />
        <Space />
        <DefaultText
          color={disabled ? theme.disabledTextColor : theme.textColor}
          theme={{ fontSize: theme.textSize }}
        >
          {label}
        </DefaultText>
      </Row>
    </Clickable>
  );
};

type ThemeProp = { theme?: RadioButtonTheme };
export const RadioButtonWithLabel = setDisplayName<
  RadioButtonWithLabelProps & ThemeProp
>('RadioButtonWithLabel')(
  compose<InnerProps, RadioButtonWithLabelProps & ThemeProp>(
    withOnToggleHandler,
    withComponentTheme('RadioButton'),
  )(RadioButtonWithLabelComponent),
);
