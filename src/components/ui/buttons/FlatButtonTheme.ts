import { defaultColors } from '../../../themes/DefaultThemeValues';

export interface FlatButtonTheme {
  textColor: string;
  disabledTextColor: string;
}

export const defaultFlatButtonTheme: FlatButtonTheme = {
  textColor: defaultColors.primaryText,
  disabledTextColor: defaultColors.disabledText,
};
