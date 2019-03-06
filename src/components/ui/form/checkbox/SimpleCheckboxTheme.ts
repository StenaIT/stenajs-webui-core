import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { defaultColors } from '../../../../themes/default-values/DefaultColors';

export interface SimpleCheckboxStateTheme {
  borderColor: string;
  backgroundColor: string;
  iconColor: string;
}

export interface SimpleCheckboxTheme {
  colors: SimpleCheckboxStateTheme;
  disabledColors: SimpleCheckboxStateTheme;
  checkedColors: SimpleCheckboxStateTheme;
  checkIcon: IconProp;
  width: string;
  height: string;
  borderRadius: string;
  iconSize: number;
}

export const defaultSimpleCheckboxTheme: SimpleCheckboxTheme = {
  colors: {
    backgroundColor: defaultColors.white,
    borderColor: defaultColors.inputBorder,
    iconColor: defaultColors.primaryText,
  },
  disabledColors: {
    backgroundColor: '#f1f1f1',
    borderColor: defaultColors.inputBorder,
    iconColor: defaultColors.disabledText,
  },
  checkedColors: {
    backgroundColor: defaultColors.white,
    borderColor: defaultColors.inputBorder,
    iconColor: defaultColors.primaryText,
  },
  checkIcon: 'check',
  width: '22px',
  height: '22px',
  borderRadius: '4px',
  iconSize: 10,
};

export const defaultSimpleCheckboxThemeDark: SimpleCheckboxTheme = {
  colors: {
    backgroundColor: '#b7d1d9',
    borderColor: 'transparent',
    iconColor: '#4d7989',
  },
  disabledColors: {
    backgroundColor: '#f1f1f1',
    borderColor: defaultColors.inputBorder,
    iconColor: defaultColors.disabledText,
  },
  checkedColors: {
    backgroundColor: '#b7d1d9',
    borderColor: defaultColors.inputBorder,
    iconColor: defaultColors.primaryText,
  },
  checkIcon: 'check',
  width: '22px',
  height: '22px',
  borderRadius: '4px',
  iconSize: 10,
};
