import * as React from 'react';
import { compose, pure, setDisplayName, withHandlers } from 'recompose';
import {
  withComponentTheme,
  WithComponentThemeProps,
} from '../../../util/enhancers/WithComponentTheme';
import { Background } from '../../colors/Background';
import { Border } from '../../decorations/Border';
import { Icon } from '../../icon/Icon';
import { Clickable } from '../../interaction/Clickable';
import { Row } from '../../layout/Row';
import { ValueOnChangeProps } from '../types';
import { SimpleCheckboxTheme } from './SimpleCheckboxTheme';

export interface SimpleCheckboxProps extends ValueOnChangeProps<boolean> {
  disabled?: boolean;
}

export interface WithOnChangeHandlerPropsForSimpleCheckboxComponent {
  onToggle: () => void;
}

type InnerProps = SimpleCheckboxProps &
  WithOnChangeHandlerPropsForSimpleCheckboxComponent &
  WithComponentThemeProps<SimpleCheckboxTheme>;

export const SimpleCheckboxComponent = ({
  theme,
  disabled,
  onToggle,
  value,
}: InnerProps) => {
  return (
    <Clickable onClick={disabled ? undefined : onToggle}>
      <Border
        color={disabled ? theme.borderColorDisabled : theme.borderColor}
        borderRadius={theme.borderRadius}
        overflow={'hidden'}
      >
        <Background
          color={
            disabled ? theme.backgroundColorDisabled : theme.backgroundColor
          }
        >
          <Row
            justifyContent={'center'}
            alignItems={'center'}
            width={theme.width}
            height={theme.height}
          >
            {value && (
              <Icon
                name={theme.checkIcon}
                color={disabled ? theme.iconColorDisabled : theme.iconColor}
                size={theme.iconSize}
              />
            )}
          </Row>
        </Background>
      </Border>
    </Clickable>
  );
};

const withOnChangeHandler = withHandlers({
  onToggle: ({ onChange, value }: SimpleCheckboxProps) => () => {
    if (onChange) {
      onChange(!value);
    }
  },
});

export const SimpleCheckbox = compose<InnerProps, SimpleCheckboxProps>(
  setDisplayName('SimpleCheckbox'),
  pure,
  withOnChangeHandler,
  withComponentTheme('SimpleCheckbox'),
)(SimpleCheckboxComponent);
