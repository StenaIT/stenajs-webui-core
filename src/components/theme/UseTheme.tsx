import { merge } from 'lodash';
import * as React from 'react';
import { setDisplayName } from 'recompose';
import { defaultTheme, OverridingTheme, Theme } from '../../themes';
import { ThemeContext } from './ThemeContext';

export interface UseThemeProps {
  theme: OverridingTheme;
}

export const UseTheme = setDisplayName<UseThemeProps>('UseTheme')(
  ({ theme, children }) => {
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
  },
);
