import { useContext } from 'react';
import { Theme } from '../../../lib/themes';
import { ThemeContext } from './ThemeContext';

export const useTheme = (): Theme => useContext(ThemeContext);
