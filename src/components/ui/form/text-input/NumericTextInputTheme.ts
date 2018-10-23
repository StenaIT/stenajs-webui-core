import { defaultColors } from '../../../../themes/default-values/DefaultColors';
import {
  defaultDefaultTextInputTheme,
  DefaultTextInputTheme,
  defaultTextInputThemeDark,
} from './DefaultTextInputTheme';

export interface NumericTextInputTheme extends DefaultTextInputTheme {
  borderColor: string;
  buttonHeight: string;
}

export const defaultNumericTextInputTheme: NumericTextInputTheme = {
  ...defaultDefaultTextInputTheme,
  borderColor: defaultColors.inputBorder,
  buttonHeight: '17px',
};

export const defaultNumericTextInputThemeDark: NumericTextInputTheme = {
  ...defaultTextInputThemeDark,
  borderColor: defaultColors.inputBorder,
  buttonHeight: '17px',
};
