import { ButtonTheme } from '../../components/ui/buttons/ButtonTheme';
import { FlatButtonTheme } from '../../components/ui/buttons/FlatButtonTheme';
import { SmallButtonTheme } from '../../components/ui/buttons/SmallButtonTheme';
import { StandardButtonTheme } from '../../components/ui/buttons/StandardButtonTheme';
import { SeparatorLineTheme } from '../../components/ui/decorations/SeparatorLineTheme';
import { CalendarTheme } from '../../components/ui/form/calendar/components/CalendarTheme';
import { SimpleCheckboxTheme } from '../../components/ui/form/checkbox/SimpleCheckboxTheme';
import { DateInputTheme } from '../../components/ui/form/date-time-input/DateInputTheme';
import { DateRangeInputTheme } from '../../components/ui/form/date-time-input/DateRangeInputTheme';
import { RadioButtonTheme } from '../../components/ui/form/radio/RadioButtonTheme';
import { SwitchTheme } from '../../components/ui/form/switch/SwitchTheme';
import { DefaultTextInputTheme } from '../../components/ui/form/text-input/DefaultTextInputTheme';
import { NumericTextInputTheme } from '../../components/ui/form/text-input/NumericTextInputTheme';
import { SimpleTextInputTheme } from '../../components/ui/form/text-input/SimpleTextInputTheme';
import { SliderTheme } from '../../components/ui/slider/SliderTheme';
import { TextTheme } from '../../components/ui/text/TextTheme';
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
  Switch: SwitchTheme;
  TinyText: TextTheme;
}
