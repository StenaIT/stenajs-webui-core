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
import {
  DefaultTextInputTheme,
  SimpleTextInputTheme,
} from '../../components/ui/form/text-input/index';
import { SliderTheme } from '../../components/ui/slider/index';
import { TextTheme } from '../../components/ui/text/index';
import { SelectTheme } from '../../enhancers/select/SelectTheme';

export interface ComponentThemes {
  Button: ButtonTheme;
  FlatButton: FlatButtonTheme;
  SmallButton: SmallButtonTheme;
  StandardButton: StandardButtonTheme;
  SimpleCheckbox: SimpleCheckboxTheme;
  SimpleTextInput: SimpleTextInputTheme;
  HeaderText: TextTheme;
  SectionHeaderText: TextTheme;
  LargeText: TextTheme;
  DefaultText: TextTheme;
  SmallText: TextTheme;
  SmallerText: TextTheme;
  TinyText: TextTheme;
  DefaultTextInput: DefaultTextInputTheme;
  DateInput: DateInputTheme;
  DateRangeInput: DateRangeInputTheme;
  Calendar: CalendarTheme;
  Select: SelectTheme;
  SeparatorLine: SeparatorLineTheme;
  Slider: SliderTheme;
}
