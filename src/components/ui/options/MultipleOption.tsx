import * as React from 'react';

export interface MultipleOptionFilterProps {
  allLabel: string;
  onAllClick: (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  onOptionClick: (
    e: React.ChangeEvent<HTMLInputElement>,
    option: Option,
  ) => void;
  options: Option[];
}

export interface Option {
  checked: boolean;
  code: string;
  label: string;
}

export const MultipleOption = ({
  allLabel,
  onAllClick,
  onOptionClick,
  options,
}: MultipleOptionFilterProps) => {
  const allChecked = options.every(option => option.checked);
  const onOptionAllClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAllClick(e, allChecked);
  };
  return (
    <div>
      <label>
        <input
          name="all"
          type="checkbox"
          checked={allChecked}
          onChange={onOptionAllClicked}
        />
        <span>{allLabel}</span>
      </label>
      {options.map((option: Option, index) => {
        const onClick = (e: React.ChangeEvent<HTMLInputElement>) =>
          onOptionClick(e, option);
        return (
          <div className="options" key={index}>
            <label>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={onClick}
              />
              <span>{option.label}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};
