import { defaultColors } from '../../../../themes/default-values/DefaultColors';

export interface NumericTextInputTheme {
  borderColor: string;
  buttonHeight: string;
}

export const defaultNumericTextInputTheme: NumericTextInputTheme = {
  borderColor: defaultColors.inputBorder,
  buttonHeight: '17px',
};
