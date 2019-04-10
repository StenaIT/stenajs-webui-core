import { IconProp } from '@fortawesome/fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons/faDotCircle';
import { Color } from 'csstype';
import {
  defaultColors,
  defaultFontSizes,
} from '../../../../themes/default-values';

export interface RadioButtonTheme {
  disabledIconColor: Color;
  disabledTextColor: Color;
  checkedIcon: IconProp;
  notCheckedIcon: IconProp;
  notCheckedColor: Color;
  iconColor: Color;
  iconSize: number;
  textColor: Color;
  textSize: string;
}

export const defaultRadioButtonTheme: RadioButtonTheme = {
  checkedIcon: faDotCircle,
  notCheckedIcon: faCircle,
  notCheckedColor: defaultColors.primaryText,
  disabledIconColor: defaultColors.disabledText,
  disabledTextColor: defaultColors.disabledText,
  iconColor: defaultColors.primaryText,
  iconSize: 20,
  textColor: defaultColors.primaryText,
  textSize: defaultFontSizes.normal,
};

export const defaultRadioButtonThemeDark: RadioButtonTheme = {
  checkedIcon: faDotCircle,
  notCheckedIcon: faCircle,
  notCheckedColor: '#4d7989',
  disabledIconColor: defaultColors.disabledText,
  disabledTextColor: defaultColors.disabledText,
  iconColor: '#4d7989',
  iconSize: 20,
  textColor: '#4d7989',
  textSize: defaultFontSizes.normal,
};
