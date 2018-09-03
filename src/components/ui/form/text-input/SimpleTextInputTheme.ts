import {
  defaultColors,
  defaultFonts,
  defaultFontSizes,
} from '../../../../themes/DefaultThemeValues';

export interface SimpleTextInputTheme {
  fontSize: string;
  fontFamily: string;
  textColor: string;
  placeholderColor: string;
  backgroundColor: string;
  height: string | undefined;
}

export const defaultSimpleTextInputTheme: SimpleTextInputTheme = {
  fontSize: defaultFontSizes.normal,
  fontFamily: defaultFonts.input,
  textColor: defaultColors.primaryText,
  placeholderColor: defaultColors.separator,
  backgroundColor: defaultColors.white,
  height: undefined,
};
