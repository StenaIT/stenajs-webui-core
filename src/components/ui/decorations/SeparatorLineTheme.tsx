import { defaultColors } from '../../../themes/default-values/DefaultColors';

export interface SeparatorLineTheme {
  color: string;
  height: string;
  width: string;
}

export const defaultSeparatorLineTheme: SeparatorLineTheme = {
  color: defaultColors.disabledTextLight,
  height: '1px',
  width: '100%',
};
