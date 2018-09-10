import { defaultColors } from '../../../themes/default-values/DefaultColors';

export interface FlatButtonTheme {
  textColor: string;
  disabledTextColor: string;
}

export const defaultFlatButtonTheme: FlatButtonTheme = {
  textColor: defaultColors.primaryText,
  disabledTextColor: defaultColors.disabledText,
};
