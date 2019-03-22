import { IconProp } from '@fortawesome/fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons/faDotCircle';
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
  iconColor: Color;
  iconSize: number;
  textColor: Color;
  textSize: string;
}

export const defaultRadioButtonTheme: RadioButtonTheme = {
  checkedIcon: ['far', 'dot-circle'],
  notCheckedIcon: ['far', 'circle'],
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
  disabledIconColor: defaultColors.disabledText,
  disabledTextColor: defaultColors.disabledText,
  iconColor: '#4d7989',
  iconSize: 20,
  textColor: '#4d7989',
  textSize: defaultFontSizes.normal,
};
