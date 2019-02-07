import { defaultColors } from '../../../../themes/default-values/DefaultColors';

export interface SwitchStateTheme {
  borderColor: string;
  backgroundColor: string;
  iconColor: string;
}

export interface SwitchTheme {
  colors: SwitchStateTheme;
  disabledColors: SwitchStateTheme;
  checkedColors: SwitchStateTheme;
  width: number;
  height: number;
  borderRadius: number;
}

export const defaultSwitchTheme: SwitchTheme = {
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
  width: 40,
  height: 21,
  borderRadius: 4,
};

export const defaultSwitchThemeDark: SwitchTheme = {
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
  width: 40,
  height: 21,
  borderRadius: 4,
};
