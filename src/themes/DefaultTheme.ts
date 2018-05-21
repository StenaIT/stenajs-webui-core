import { Theme } from './Theme';
import { defaultButtonTheme } from '../components/ui/buttons/ButtonTheme';
import {
  defaultColors,
  defaultFonts,
  defaultFontSizes,
  defaultMetrics,
} from './DefaultThemeValues';
import { defaultSimpleCheckboxTheme } from '../components/ui/form/checkbox/SimpleCheckboxTheme';
import { defaultSimpleTextInputTheme } from '../components/ui/form/textinput/SimpleTextInputTheme';
import { defaultStandardButtonTheme } from '../components/ui/buttons/StandardButtonTheme';
import { defaultSmallButtonTheme } from '../components/ui/buttons/SmallButtonTheme';
import { defaultFlatButtonTheme } from '../components/ui/buttons/FlatButtonTheme';
import {
  defaultDefaultTextTheme,
  defaultHeaderTextTheme,
  defaultLargeTextTheme,
  defaultSmallerTextTheme,
  defaultSmallTextTheme,
  defaultTinyTextTheme,
} from '../components/ui/text/TextTheme';

export const defaultTheme: Theme = {
  colors: defaultColors,
  metrics: defaultMetrics,
  fonts: defaultFonts,
  fontSizes: defaultFontSizes,
  components: {
    Button: defaultButtonTheme,
    FlatButton: defaultFlatButtonTheme,
    SmallButton: defaultSmallButtonTheme,
    StandardButton: defaultStandardButtonTheme,
    SimpleCheckbox: defaultSimpleCheckboxTheme,
    SimpleTextInput: defaultSimpleTextInputTheme,
    HeaderText: defaultHeaderTextTheme,
    LargeText: defaultLargeTextTheme,
    DefaultText: defaultDefaultTextTheme,
    SmallText: defaultSmallTextTheme,
    SmallerText: defaultSmallerTextTheme,
    TinyText: defaultTinyTextTheme,
  },
};
