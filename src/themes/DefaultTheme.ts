import { defaultButtonTheme } from '../components/ui/buttons/ButtonTheme';
import { defaultFlatButtonTheme } from '../components/ui/buttons/FlatButtonTheme';
import { defaultSmallButtonTheme } from '../components/ui/buttons/SmallButtonTheme';
import { defaultStandardButtonTheme } from '../components/ui/buttons/StandardButtonTheme';
import { defaultSeparatorLineTheme } from '../components/ui/decorations/SeparatorLineTheme';
import { defaultCalendarTheme } from '../components/ui/form/calendar/components/CalendarTheme';
import { defaultSimpleCheckboxTheme } from '../components/ui/form/checkbox/SimpleCheckboxTheme';
import { defaultDateInputTheme } from '../components/ui/form/date-time-input/DateInputTheme';
import { defaultDateRangeInputTheme } from '../components/ui/form/date-time-input/DateRangeInputTheme';
import { defaultRadioButtonTheme } from '../components/ui/form/radio/RadioButtonTheme';
import { defaultSwitchTheme } from '../components/ui/form/switch/SwitchTheme';
import { defaultDefaultTextInputTheme } from '../components/ui/form/text-input/DefaultTextInputTheme';
import { defaultNumericTextInputTheme } from '../components/ui/form/text-input/NumericTextInputTheme';
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
import { defaultSelectTheme } from '../features/select/SelectTheme';
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
    Calendar: defaultCalendarTheme,
    DateInput: defaultDateInputTheme,
    DateRangeInput: defaultDateRangeInputTheme,
    DefaultText: defaultDefaultTextTheme,
    DefaultTextInput: defaultDefaultTextInputTheme,
    FlatButton: defaultFlatButtonTheme,
    HeaderText: defaultHeaderTextTheme,
    LargeText: defaultLargeTextTheme,
    NumericTextInput: defaultNumericTextInputTheme,
    RadioButton: defaultRadioButtonTheme,
    SectionHeaderText: defaultSectionHeaderTextTheme,
    Select: defaultSelectTheme,
    SeparatorLine: defaultSeparatorLineTheme,
    SimpleCheckbox: defaultSimpleCheckboxTheme,
    SimpleTextInput: defaultSimpleTextInputTheme,
    Slider: defaultSliderTheme,
    SmallButton: defaultSmallButtonTheme,
    SmallText: defaultSmallTextTheme,
    SmallerText: defaultSmallerTextTheme,
    StandardButton: defaultStandardButtonTheme,
    Switch: defaultSwitchTheme,
    TinyText: defaultTinyTextTheme,
  },
};
