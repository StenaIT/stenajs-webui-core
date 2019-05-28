import styled from '@emotion/styled';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import * as React from 'react';
import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { compose, setDisplayName } from 'recompose';
import { DeepPartial } from '../../../../types/DeepPartial';
import { RequiredInputComponentProps } from '../../../RequiredComponentProps';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers/WithComponentTheme';
import { Icon } from '../../icon/Icon';
import { Clickable } from '../../interaction/Clickable';
import { Row } from '../../layout/Row';
import { ValueOnChangeProps } from '../types';
import { SimpleCheckboxTheme } from './SimpleCheckboxTheme';

export interface SimpleCheckboxProps
  extends ValueOnChangeProps<boolean>,
    RequiredInputComponentProps<HTMLDivElement, HTMLInputElement> {
  disabled?: boolean;
  indeterminate?: boolean;
  theme?: DeepPartial<SimpleCheckboxTheme>;
}

type InnerProps = SimpleCheckboxProps &
  WithInnerComponentThemeProps<SimpleCheckboxTheme>;

const InvisibleInput = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
`;

const Wrapper = styled('div')<{
  disabled: boolean | undefined;
  theme: SimpleCheckboxTheme;
  value: boolean | undefined;
}>`
  background-color: ${({ disabled, theme, value }) =>
    disabled
      ? theme.disabledColors.backgroundColor
      : value
        ? theme.checkedColors.backgroundColor
        : theme.colors.backgroundColor};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-color: ${({ disabled, theme, value }) =>
    disabled
      ? theme.disabledColors.borderColor
      : value
        ? theme.checkedColors.borderColor
        : theme.colors.borderColor};
  overflow: hidden;
`;

const StyledSimpleCheckboxWrapper = styled.div<Pick<InnerProps, 'theme'>>`
  height: ${({ theme }) => theme.height};
  position: relative;
  width: ${({ theme }) => theme.width};

  input:focus + div {
    border-color: ${({ theme }) => theme.borderColorFocused};
  }
`;

export const SimpleCheckboxComponent: React.FC<InnerProps> = ({
  className,
  disabled,
  inputRef,
  indeterminate,
  onChange,
  innerRef,
  theme,
  value,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = useCallback(
    () => {
      if (onChange) {
        onChange(!value);
      }
    },
    [onChange, value],
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        if (onChange) {
          onChange(e.target.checked);
        }
      }
    },
    [disabled, onChange],
  );

  useEffect(
    () => {
      const checkboxRef = inputRef || ref;
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = Boolean(indeterminate);
      }
    },
    [indeterminate, inputRef],
  );

  return (
    <StyledSimpleCheckboxWrapper
      className={className}
      ref={innerRef}
      theme={theme}
    >
      <Clickable onClick={disabled ? undefined : onClick}>
        <InvisibleInput
          disabled={disabled}
          checked={value}
          ref={inputRef || ref}
          onChange={handleInputChange}
          type={'checkbox'}
        />
        <Wrapper disabled={disabled} theme={theme} value={value}>
          <Row
            justifyContent={'center'}
            alignItems={'center'}
            width={theme.width}
            height={theme.height}
          >
            {(value || indeterminate) && (
              <Icon
                name={indeterminate ? faMinus : theme.checkIcon}
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
    </StyledSimpleCheckboxWrapper>
  );
};

export const SimpleCheckbox = compose<InnerProps, SimpleCheckboxProps>(
  setDisplayName('SimpleCheckbox'),
  withComponentTheme('SimpleCheckbox'),
)(SimpleCheckboxComponent);
