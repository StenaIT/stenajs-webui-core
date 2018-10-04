import * as React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import { DeepPartial } from '../../../../types/DeepPartial';
import {
  withOnToggleHandler,
  WithOnToggleHandler,
} from '../../../util/enhancers/withOnToggleHandler';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
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
  theme?: DeepPartial<SimpleCheckboxTheme>;
}

type InnerProps = SimpleCheckboxProps &
  WithOnToggleHandler &
  WithInnerComponentThemeProps<SimpleCheckboxTheme>;

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

export const SimpleCheckbox = compose<InnerProps, SimpleCheckboxProps>(
  setDisplayName('SimpleCheckbox'),
  pure,
  withOnToggleHandler,
  withComponentTheme('SimpleCheckbox'),
)(SimpleCheckboxComponent);
