import { addCalendarStories } from './CalendarStories';
import { addCheckboxStories } from './CheckboxStories';
import { addDateTimeInputStories } from './DateTimeInputStories';
import { addMultipleOptionsStories } from './MultipleOptionsStories';
import { addRadioButtonStories } from './RadioButtonStories';
import { addSelectStories } from './SelectStories';
import { addSwitchStories } from './SwitchStories';
import { addTextInputStories } from './TextInputStories';

export const addFormStories = () => {
  addCalendarStories();
  addCheckboxStories();
  addDateTimeInputStories();
  addMultipleOptionsStories();
  addRadioButtonStories();
  addSelectStories();
  addSwitchStories();
  addTextInputStories();
};
