import * as React from 'react';
import { ChangeEvent, useCallback } from 'react';
import styled, { css } from 'react-emotion';
import { compose, setDisplayName } from 'recompose';
import { RequiredInputComponentProps } from '../../../RequiredComponentProps';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers';
import { Icon } from '../../icon';
import { SwitchTheme } from './SwitchTheme';

export interface SwitchProps
  extends RequiredInputComponentProps<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  value: string;
  theme?: SwitchTheme;
}

const invisibleInputStyles = css`
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

const Back = styled('div')<Pick<SwitchProps, 'checked' | 'disabled' | 'theme'>>`
  cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};
  width: ${({ theme }) => theme.width}px;
  height: ${({ theme }) => theme.height}px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ checked, disabled, theme }) =>
    disabled
      ? theme.disabledColors.backgroundColor
      : checked
        ? theme.checkedColors.backgroundColor
        : theme.colors.backgroundColor};
  position: relative;

  :hover {
    opacity: ${({ disabled }) => (disabled ? '1' : '0.7')};
  }
`;

const Front = styled('div')<
  Pick<SwitchProps, 'checked' | 'disabled' | 'theme'>
>`
  background-color: ${({ checked, disabled, theme }) =>
    disabled
      ? theme.disabledColors.iconBackgroundColor
      : checked
        ? theme.checkedColors.iconBackgroundColor
        : theme.colors.iconBackgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius - 1}px;
  height: ${({ theme }) => theme.height - 4}px;
  position: absolute;
  right ${({ checked, theme }) =>
    checked ? 2 : `${theme.width - theme.height + 2}`}px;
  top: 2px;
  transition: right ${({ theme }) => theme.width / 400}s linear;
  width: ${({ theme }) => theme.height - 4}px; 
`;

const IconWrapper = styled('div')<Pick<SwitchProps, 'theme'>>`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.height - 4}px;
  justify-content: center;
  width: ${({ theme }) => theme.height - 4}px;
`;

type InnerProps = WithInnerComponentThemeProps<SwitchTheme> & SwitchProps;

const SwitchComponent: React.FC<InnerProps> = ({
  checked,
  className,
  disabled = false,
  inputRef,
  onChange,
  value,
  ref,
  theme,
  ...rest
}) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange(e.target.checked);
      }
    },
    [onChange],
  );

  const handleSwitchClick = useCallback(
    () => {
      if (!disabled) {
        onChange(!checked);
      }
    },
    [checked, onChange],
  );

  return (
    <div ref={ref}>
      <Back
        checked={checked}
        className={className}
        disabled={disabled}
        onClick={handleSwitchClick}
        theme={theme}
      >
        <input
          checked={checked}
          className={invisibleInputStyles}
          onChange={handleInputChange}
          ref={inputRef}
          type={'checkbox'}
          value={value}
        />

        <Front checked={checked} disabled={disabled} theme={theme}>
          {checked && (
            <IconWrapper theme={theme}>
              <Icon
                color={
                  disabled
                    ? theme.disabledColors.iconColor
                    : checked
                      ? theme.checkedColors.iconColor
                      : theme.colors.iconColor
                }
                name={'check'}
                size={theme.height - 8}
              />
            </IconWrapper>
          )}
        </Front>
      </Back>
    </div>
  );
};

export const Switch = compose<InnerProps, SwitchProps>(
  setDisplayName('Switch'),
  withComponentTheme('Switch'),
)(SwitchComponent);
