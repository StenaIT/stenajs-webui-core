import {
  defaultColors,
  defaultFonts,
  defaultFontSizes,
} from '../../../themes/DefaultThemeValues';

export interface ButtonTheme {
  textColor: string;
  bgColor: string;
  textColorDisabled: string;
  bgColorDisabled: string;
  font: string;
  fontSize: string;
  borderRadius: string | undefined;
  numSpacing: number;
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
};
