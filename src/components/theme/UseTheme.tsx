import { merge } from 'lodash';
import * as React from 'react';
import { defaultTheme, OverridingTheme, Theme } from '../../themes';
import { ThemeContext } from './ThemeContext';

export interface UseThemeProps {
  theme: OverridingTheme;
  children: {};
}

export const UseTheme = ({ theme, children }: UseThemeProps) => {
  const mergedTheme: Theme = merge<{}, Theme, OverridingTheme>(
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
