import * as React from 'react';
import { defaultTheme } from '../../themes/DefaultTheme';
import { Theme } from '../../themes/Theme';

export type ThemeContextValue = Theme;

export const ThemeContext = React.createContext<ThemeContextValue>(
  defaultTheme,
);
