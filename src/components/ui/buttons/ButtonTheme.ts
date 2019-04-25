import { defaultColors } from '../../../themes/default-values/DefaultColors';
import { defaultFonts } from '../../../themes/default-values/DefaultFonts';
import { defaultFontSizes } from '../../../themes/default-values/DefaultFontSizes';

export interface ButtonTheme {
  textColor: string;
  bgColor: string;
  textColorDisabled: string;
  bgColorDisabled: string;
  font: string;
  fontSize: string;
  borderRadius: string | undefined;
  numSpacing: number;
  successTextColor: string;
  successIconColor: string;
}

export const defaultButtonTheme: ButtonTheme = {
  textColor: defaultColors.white,
  bgColor: '#605988',
  textColorDisabled: defaultColors.white,
  bgColorDisabled: defaultColors.disabledText,
  font: defaultFonts.buttons,
  fontSize: defaultFontSizes.normal,
  borderRadius: '3px',
  numSpacing: 2,
  successTextColor: defaultColors.successGreen,
  successIconColor: defaultColors.successGreen,
};
