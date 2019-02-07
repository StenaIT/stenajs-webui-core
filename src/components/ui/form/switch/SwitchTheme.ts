import { defaultColors } from '../../../../themes/default-values/DefaultColors';

export interface SwitchStateTheme {
  backgroundColor: string;
  iconBackgroundColor: string;
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
    backgroundColor: defaultColors.primaryTextLight,
    iconBackgroundColor: defaultColors.white,
    iconColor: defaultColors.primaryTextLight,
  },
  disabledColors: {
    backgroundColor: defaultColors.inputBorder,
    iconBackgroundColor: defaultColors.white,
    iconColor: defaultColors.disabledText,
  },
  checkedColors: {
    backgroundColor: defaultColors.primaryText,
    iconBackgroundColor: defaultColors.white,
    iconColor: defaultColors.primaryText,
  },
  width: 40,
  height: 21,
  borderRadius: 4,
};

export const defaultSwitchThemeDark: SwitchTheme = {
  colors: {
    backgroundColor: '#b7d1d9',
    iconBackgroundColor: defaultColors.white,
    iconColor: '#4d7989',
  },
  disabledColors: {
    backgroundColor: defaultColors.inputBorder,
    iconBackgroundColor: defaultColors.white,
    iconColor: defaultColors.disabledText,
  },
  checkedColors: {
    backgroundColor: '#b7d1d9',
    iconBackgroundColor: defaultColors.white,
    iconColor: defaultColors.primaryText,
  },
  width: 40,
  height: 21,
  borderRadius: 4,
};
