import * as React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeContext } from './ThemeContext';
import { defaultTheme } from '../../themes/DefaultTheme';
import { merge } from 'lodash';

export interface UseThemeProps {
  theme: Partial<Theme>;
  children: {};
}

export const UseTheme = ({ theme, children }: UseThemeProps) => {
  const mergedTheme: Theme = merge<{}, Theme, Partial<Theme>>(
    {},
    defaultTheme,
    theme,
  ) as Theme;
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
