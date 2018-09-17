import { IconProp } from '@fortawesome/fontawesome';
import { defaultColors } from '../../../../themes/default-values/DefaultColors';

export interface SimpleCheckboxTheme {
  borderColor: string;
  borderColorDisabled: string;
  backgroundColor: string;
  backgroundColorDisabled: string;
  iconColor: string;
  iconColorDisabled: string;
  checkIcon: IconProp;
  width: string;
  height: string;
  borderRadius: string;
  iconSize: number;
}

export const defaultSimpleCheckboxTheme: SimpleCheckboxTheme = {
  backgroundColor: defaultColors.white,
  backgroundColorDisabled: '#f1f1f1',
  borderColor: defaultColors.inputBorder,
  borderColorDisabled: defaultColors.inputBorder,
  iconColor: defaultColors.primaryText,
  iconColorDisabled: defaultColors.disabledText,
  checkIcon: 'check',
  width: '22px',
  height: '22px',
  borderRadius: '4px',
  iconSize: 10,
};

export const darkSimpleCheckboxTheme: SimpleCheckboxTheme = {
  backgroundColor: '#b7d1d9',
  backgroundColorDisabled: '#f1f1f1',
  borderColor: 'transparent',
  borderColorDisabled: defaultColors.inputBorder,
  iconColor: '#4d7989',
  iconColorDisabled: defaultColors.disabledText,
  checkIcon: 'check',
  width: '22px',
  height: '22px',
  borderRadius: '4px',
  iconSize: 10,
};
