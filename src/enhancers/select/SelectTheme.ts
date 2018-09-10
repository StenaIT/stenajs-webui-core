import { defaultColors } from '../../themes/default-values/DefaultColors';
import { defaultFonts } from '../../themes/default-values/DefaultFonts';
import { defaultFontSizes } from '../../themes/default-values/DefaultFontSizes';

export interface SelectTheme {
  arrowColor: {
    focused: {
      standard: string;
      hover: string;
    };
    closed: {
      standard: string;
      hover: string;
    };
  };
  clearButtonColor: {
    standard: string;
    hover: string;
  };
  input: {
    backgroundColor: string;
    borderColor: string;
    borderColorFocused: string;
    fontFamily: string;
    fontSize: string;
    height: string;
    placeholderColor: string;
    textColor: string;
  };
  menu: {
    disabledTextColor: string;
    disabledBackgroundColor: string | undefined;
    textColor: string;
    backgroundColor: string;
    hoverTextColor: string;
    hoverBackgroundColor: string;
    selectedItemTextColor: string;
    selectedItemBackgroundColor: string;
  };
  multiSelect: {
    backgroundColor: string;
    removeButtonBackgroundColor: string;
    removeButtonTextColor: string;
    removeButtonHoverBackgroundColor: string;
    removeButtonHoverTextColor: string;
  };
}

export const defaultSelectTheme: SelectTheme = {
  arrowColor: {
    focused: {
      hover: defaultColors.primaryText,
      standard: defaultColors.separator,
    },
    closed: {
      hover: defaultColors.primaryText,
      standard: defaultColors.separator,
    },
  },
  clearButtonColor: {
    hover: defaultColors.primaryText,
    standard: defaultColors.separator,
  },
  input: {
    backgroundColor: defaultColors.white,
    borderColor: defaultColors.inputBorder,
    borderColorFocused: defaultColors.inputBorderFocused,
    fontFamily: defaultFonts.primary,
    fontSize: defaultFontSizes.normal,
    height: '34px',
    placeholderColor: defaultColors.separator,
    textColor: defaultColors.primaryText,
  },
  menu: {
    disabledTextColor: defaultColors.disabledText,
    disabledBackgroundColor: undefined,
    textColor: defaultColors.primaryText,
    backgroundColor: defaultColors.white,
    hoverTextColor: defaultColors.primaryText,
    hoverBackgroundColor: '#F2F3F5',
    selectedItemTextColor: defaultColors.primaryText,
    selectedItemBackgroundColor: '#B9D8DF',
  },
  multiSelect: {
    backgroundColor: '#B9D8DF',
    removeButtonBackgroundColor: '#B9D8DF',
    removeButtonTextColor: defaultColors.primaryText,
    removeButtonHoverBackgroundColor: defaultColors.primaryBgDark,
    removeButtonHoverTextColor: defaultColors.white,
  },
};

export const selectThemeDark: SelectTheme = {
  arrowColor: {
    focused: {
      hover: defaultColors.white,
      standard: defaultColors.separator,
    },
    closed: {
      hover: defaultColors.white,
      standard: defaultColors.separator,
    },
  },
  clearButtonColor: {
    standard: defaultColors.separator,
    hover: defaultColors.white,
  },
  input: {
    backgroundColor: '#4a5d73',
    borderColor: 'transparent',
    borderColorFocused: '#92a3b5',
    fontFamily: defaultFonts.primary,
    fontSize: defaultFontSizes.normal,
    height: '34px',
    placeholderColor: defaultColors.white,
    textColor: defaultColors.white,
  },
  menu: {
    disabledTextColor: defaultColors.disabledText,
    disabledBackgroundColor: undefined,
    backgroundColor: '#4a5d73',
    textColor: defaultColors.white,
    hoverTextColor: defaultColors.white,
    hoverBackgroundColor: '#6F7E90',
    selectedItemTextColor: '#226F81',
    selectedItemBackgroundColor: '#B9D8DF',
  },
  multiSelect: {
    backgroundColor: '#B9D8DF',
    removeButtonBackgroundColor: '#B9D8DF',
    removeButtonTextColor: defaultColors.primaryText,
    removeButtonHoverBackgroundColor: defaultColors.primaryBgDark,
    removeButtonHoverTextColor: defaultColors.white,
  },
};
