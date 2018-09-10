import { ComponentThemes } from './theme-types/ComponentThemes';
import { ThemeColors } from './theme-types/ThemeColors';
import { ThemeFonts } from './theme-types/ThemeFonts';
import { ThemeFontSizes } from './theme-types/ThemeFontSizes';
import { ThemeMetrics } from './theme-types/ThemeMetrics';

export interface Theme {
  colors: ThemeColors;
  metrics: ThemeMetrics;
  fonts: ThemeFonts;
  fontSizes: ThemeFontSizes;
  components: ComponentThemes;
}
