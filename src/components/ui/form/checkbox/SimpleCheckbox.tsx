import * as React from 'react';
import styled from 'react-emotion';
import { compose, pure, setDisplayName } from 'recompose';
import { DeepPartial } from '../../../../types/DeepPartial';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers/WithComponentTheme';
import {
  withOnToggleHandler,
  WithOnToggleHandler,
} from '../../../util/enhancers/withOnToggleHandler';
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

const Wrapper = styled('div')<{
  disabled: boolean;
  theme: SimpleCheckboxTheme;
  value: T;
}>`
  background-color: ${({ disabled, theme, value }) =>
    disabled
      ? theme.disabledColors.backgroundColor
      : value
        ? theme.checkedColors.backgroundColor
        : theme.colors.backgroundColor};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border-color: ${({ disabled, theme, value }) =>
    disabled
      ? theme.disabledColors.borderColor
      : value
        ? theme.checkedColors.borderColor
        : theme.colors.borderColor};
  overflow: hidden;
`;

export const SimpleCheckboxComponent = ({
  theme,
  disabled,
  onToggle,
  value,
}: InnerProps) => {
  return (
    <Clickable onClick={disabled ? undefined : onToggle}>
      <Wrapper disabled={disabled} theme={theme} value={value}>
        <Row
          justifyContent={'center'}
          alignItems={'center'}
          width={theme.width}
          height={theme.height}
        >
          {value && (
            <Icon
              name={theme.checkIcon}
              color={
                disabled
                  ? theme.disabledColors.iconColor
                  : theme.colors.iconColor
              }
              size={theme.iconSize}
            />
          )}
        </Row>
      </Wrapper>
    </Clickable>
  );
};

export const SimpleCheckbox = compose<InnerProps, SimpleCheckboxProps>(
  setDisplayName('SimpleCheckbox'),
  pure,
  withOnToggleHandler,
  withComponentTheme('SimpleCheckbox'),
)(SimpleCheckboxComponent);
