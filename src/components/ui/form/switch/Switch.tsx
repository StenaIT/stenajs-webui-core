import * as React from 'react';
import { ChangeEvent, useCallback } from 'react';
import styled from 'react-emotion';
import { compose, setDisplayName } from 'recompose';
import {
  withComponentTheme,
  WithInnerComponentThemeProps,
} from '../../../util/enhancers';
import { Icon } from '../../icon';
import { SwitchTheme } from './SwitchTheme';

export interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  value: string;
  theme?: SwitchTheme;
}

const InvisibleInput = styled('input')`
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

const Back = styled('div')<Pick<SwitchProps, 'theme'>>`
  cursor: pointer;
  width: ${({ theme }) => theme.width}px;
  height: ${({ theme }) => theme.height}px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: #da419c;
  position: relative;
`;

const Front = styled('div')<Pick<SwitchProps, 'checked' | 'theme'>>`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius - 1}px;
  color: #303030;
  height: ${({ theme }) => theme.height - 4}px;
  position: absolute;
  right ${({ checked, theme }) =>
    checked ? '2px' : `${theme.width - theme.height + 2}px`};
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
  onChange,
  value,
  theme,
}) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    },
    [onChange],
  );

  const handleSwitchClick = useCallback(
    () => {
      onChange(!checked);
    },
    [checked, onChange],
  );

  return (
    <>
      <Back onClick={handleSwitchClick} theme={theme}>
        <InvisibleInput
          checked={checked}
          onChange={handleInputChange}
          type={'checkbox'}
          value={value}
        />
        <Front checked={checked} theme={theme}>
          {checked && (
            <IconWrapper theme={theme}>
              <Icon color={'#303030'} name={'check'} size={theme.height - 8} />
            </IconWrapper>
          )}
        </Front>
      </Back>
    </>
  );
};

export const Switch = compose<InnerProps, SwitchProps>(
  setDisplayName('Switch'),
  withComponentTheme('Switch'),
)(SwitchComponent);
