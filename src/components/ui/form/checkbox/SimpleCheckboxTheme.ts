import { IconProp } from '@fortawesome/fontawesome';
import { defaultColors } from '../../../../themes/DefaultThemeValues';

export interface SimpleCheckboxTheme {
  colorOn: string | undefined;
  colorOff: string | undefined;
  colorDisabled: string | undefined;
  iconOn: IconProp;
  iconOff: IconProp;
}

export const defaultSimpleCheckboxTheme: SimpleCheckboxTheme = {
  colorOn: undefined,
  colorOff: undefined,
  colorDisabled: defaultColors.disabledText,
  iconOn: ['far', 'check-circle'],
  iconOff: ['far', 'circle'],
};
