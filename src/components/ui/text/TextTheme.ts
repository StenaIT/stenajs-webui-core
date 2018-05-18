import {
  defaultFonts,
  defaultFontSizes,
} from '../../../themes/DefaultThemeValues';

export interface TextTheme {
  fontSize: string;
  fontFamily: string;
}

export const defaultHeaderTextTheme: TextTheme = {
  fontSize: defaultFontSizes.huge,
  fontFamily: defaultFonts.primary,
};

export const defaultLargeTextTheme: TextTheme = {
  fontSize: defaultFontSizes.large,
  fontFamily: defaultFonts.primary,
};

export const defaultDefaultTextTheme: TextTheme = {
  fontSize: defaultFontSizes.normal,
  fontFamily: defaultFonts.primary,
};

export const defaultSmallTextTheme: TextTheme = {
  fontSize: defaultFontSizes.small,
  fontFamily: defaultFonts.primary,
};

export const defaultSmallerTextTheme: TextTheme = {
  fontSize: defaultFontSizes.smaller,
  fontFamily: defaultFonts.primary,
};

export const defaultTinyTextTheme: TextTheme = {
  fontSize: defaultFontSizes.tiny,
  fontFamily: defaultFonts.primary,
};
