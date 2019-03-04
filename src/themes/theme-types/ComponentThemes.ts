import {
  ButtonTheme,
  FlatButtonTheme,
  SmallButtonTheme,
  StandardButtonTheme,
} from '../../components/ui/buttons/index';
import { SeparatorLineTheme } from '../../components/ui/decorations/SeparatorLineTheme';
import { CalendarTheme } from '../../components/ui/form/calendar/components/index';
import { SimpleCheckboxTheme } from '../../components/ui/form/checkbox/index';
import {
  DateInputTheme,
  DateRangeInputTheme,
} from '../../components/ui/form/date-time-input/index';
import { RadioButtonTheme } from '../../components/ui/form/radio/RadioButtonTheme';
import {
  DefaultTextInputTheme,
  SimpleTextInputTheme,
} from '../../components/ui/form/text-input/index';
import { NumericTextInputTheme } from '../../components/ui/form/text-input/NumericTextInputTheme';
import { SliderTheme } from '../../components/ui/slider/index';
import { TextTheme } from '../../components/ui/text/index';
import { SelectTheme } from '../../features/select/SelectTheme';

export interface ComponentThemes {
  Button: ButtonTheme;
  Calendar: CalendarTheme;
  DateInput: DateInputTheme;
  DateRangeInput: DateRangeInputTheme;
  DefaultText: TextTheme;
  DefaultTextInput: DefaultTextInputTheme;
  FlatButton: FlatButtonTheme;
  HeaderText: TextTheme;
  LargeText: TextTheme;
  NumericTextInput: NumericTextInputTheme;
  RadioButton: RadioButtonTheme;
  SectionHeaderText: TextTheme;
  Select: SelectTheme;
  SeparatorLine: SeparatorLineTheme;
  SimpleCheckbox: SimpleCheckboxTheme;
  SimpleTextInput: SimpleTextInputTheme;
  Slider: SliderTheme;
  SmallButton: SmallButtonTheme;
  SmallText: TextTheme;
  SmallerText: TextTheme;
  StandardButton: StandardButtonTheme;
  TinyText: TextTheme;
}
