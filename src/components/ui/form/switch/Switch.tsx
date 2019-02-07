import * as React from 'react';
import { ChangeEvent, useCallback } from 'react';
import styled from 'react-emotion';
import { Icon } from '../../icon';

export interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  value: string;
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

const Back = styled('div')`
  cursor: pointer;
  width: 40px;
  height: 21px;
  border-radius: 4px;
  background-color: #da419c;
  position: relative;
`;

const Front = styled('div')<Pick<SwitchProps, 'checked'>>`
  background-color: #fff;
  border-radius: 3px;
  color: #303030;
  height: 17px;
  position: absolute;
  right ${({ checked }) => (checked ? '2px' : '21px')};
  top: 2px;
  transition: right .1s linear;
  width: 17px;
`;

const IconWrapper = styled('div')`
  align-items: center;
  display: flex;
  height: 17px;
  justify-content: center;
  width: 17px;
`;

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, value }) => {
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
      <Back onClick={handleSwitchClick}>
        <InvisibleInput
          checked={checked}
          onChange={handleInputChange}
          type={'checkbox'}
          value={value}
        />
        <Front checked={checked}>
          {checked && (
            <IconWrapper>
              <Icon color={'#303030'} name={'check'} size={12} />
            </IconWrapper>
          )}
        </Front>
      </Back>
    </>
  );
};
