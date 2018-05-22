import * as React from 'react';
import { defaultTheme } from '../../themes';
import { Theme } from '../../themes';

export type ThemeContextValue = Theme;

export const ThemeContext = React.createContext<ThemeContextValue>(
  defaultTheme,
);
