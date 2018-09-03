import { defaultColors } from '../../../../themes/DefaultThemeValues';
import { BorderStyle } from '../../decorations';

export interface DefaultTextInputTheme {
  borderRadius: string;
  borderColor: string;
  borderColorFocused: string;
  borderStyle: BorderStyle;
  borderWidth: number;
  fontSize: string;
  height: string;
  paddingLeft: string;
  paddingRight: string;
  iconSize: number;
}

export const defaultDefaultTextInputTheme: DefaultTextInputTheme = {
  borderRadius: '4px',
  borderColor: defaultColors.separator,
  borderColorFocused: '#605988',
  borderStyle: 'solid',
  borderWidth: 1,
  fontSize: '13px',
  height: '34px',
  paddingLeft: '8px',
  paddingRight: '8px',
  iconSize: 13,
};
