import { defaultButtonTheme } from '../components/ui/buttons/ButtonTheme';
import { defaultFlatButtonTheme } from '../components/ui/buttons/FlatButtonTheme';
import { defaultSmallButtonTheme } from '../components/ui/buttons/SmallButtonTheme';
import { defaultStandardButtonTheme } from '../components/ui/buttons/StandardButtonTheme';
import { defaultSeparatorLineTheme } from '../components/ui/decorations/SeparatorLineTheme';
import { defaultCalendarTheme } from '../components/ui/form/calendar/components/CalendarTheme';
import { defaultSimpleCheckboxTheme } from '../components/ui/form/checkbox/SimpleCheckboxTheme';
import { defaultDateInputTheme } from '../components/ui/form/date-time-input/DateInputTheme';
import { defaultDateRangeInputTheme } from '../components/ui/form/date-time-input/DateRangeInputTheme';
import { defaultDefaultTextInputTheme } from '../components/ui/form/text-input/DefaultTextInputTheme';
import { defaultSimpleTextInputTheme } from '../components/ui/form/text-input/SimpleTextInputTheme';
import { defaultSliderTheme } from '../components/ui/slider/SliderTheme';
import {
  defaultDefaultTextTheme,
  defaultHeaderTextTheme,
  defaultLargeTextTheme,
  defaultSectionHeaderTextTheme,
  defaultSmallerTextTheme,
  defaultSmallTextTheme,
  defaultTinyTextTheme,
} from '../components/ui/text/TextTheme';
import { defaultSelectTheme } from '../enhancers/select/SelectTheme';
import { defaultColors } from './default-values/DefaultColors';
import { defaultFonts } from './default-values/DefaultFonts';
import { defaultFontSizes } from './default-values/DefaultFontSizes';
import { defaultMetrics } from './default-values/DefaultMetrics';
import { Theme } from './Theme';

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
    SectionHeaderText: defaultSectionHeaderTextTheme,
    LargeText: defaultLargeTextTheme,
    DefaultText: defaultDefaultTextTheme,
    SmallText: defaultSmallTextTheme,
    SmallerText: defaultSmallerTextTheme,
    TinyText: defaultTinyTextTheme,
    DefaultTextInput: defaultDefaultTextInputTheme,
    DateInput: defaultDateInputTheme,
    DateRangeInput: defaultDateRangeInputTheme,
    Calendar: defaultCalendarTheme,
    Select: defaultSelectTheme,
    SeparatorLine: defaultSeparatorLineTheme,
    Slider: defaultSliderTheme,
  },
};
