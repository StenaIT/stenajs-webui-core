import * as React from 'react';
import { Theme } from '../../themes/Theme';
import { ThemeContext } from './ThemeContext';

export interface GetThemeProps {
  children: (theme: Theme) => JSX.Element;
}

export const GetTheme = ({ children }: GetThemeProps) => (
  <ThemeContext.Consumer>{children}</ThemeContext.Consumer>
);
