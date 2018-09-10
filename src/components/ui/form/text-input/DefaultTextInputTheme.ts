import { defaultColors } from '../../../../themes/default-values/DefaultColors';
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
  borderColor: defaultColors.inputBorder,
  borderColorFocused: defaultColors.inputBorderFocused,
  borderStyle: 'solid',
  borderWidth: 1,
  fontSize: '13px',
  height: '34px',
  paddingLeft: '8px',
  paddingRight: '8px',
  iconSize: 13,
};
