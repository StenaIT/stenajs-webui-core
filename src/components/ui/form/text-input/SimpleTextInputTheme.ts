import { defaultColors } from '../../../../themes/default-values/DefaultColors';
import { defaultFonts } from '../../../../themes/default-values/DefaultFonts';
import { defaultFontSizes } from '../../../../themes/default-values/DefaultFontSizes';

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
