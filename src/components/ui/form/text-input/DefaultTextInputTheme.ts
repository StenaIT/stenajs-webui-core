import { defaultColors } from '../../../../themes/DefaultThemeValues';

export interface DefaultTextInputTheme {
  borderRadius: string;
  border: string;
  fontSize: string;
  height: string;
  paddingLeft: string;
  paddingRight: string;
}

export const defaultDefaultTextInputTheme: DefaultTextInputTheme = {
  borderRadius: '4px',
  border: `1px solid ${defaultColors.separator}`,
  fontSize: '13px',
  height: '34px',
  paddingLeft: '8px',
  paddingRight: '8px',
};