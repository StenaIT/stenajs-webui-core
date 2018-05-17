import { Theme } from './Theme';
import { buttonDefaultTheme } from '../components/ui/buttons/ButtonTheme';
import {
  defaultColors,
  defaultFonts,
  defaultFontSizes,
  defaultMetrics,
} from './DefaultThemeValues';

export const defaultTheme: Theme = {
  colors: defaultColors,
  metrics: defaultMetrics,
  fonts: defaultFonts,
  fontSizes: defaultFontSizes,
  components: {
    Button: buttonDefaultTheme,
  },
};
