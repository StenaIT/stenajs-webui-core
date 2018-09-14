import { addCalendarStories } from './CalendarStories';
import { addDateTimeInputStories } from './DateTimeInputStories';
import { addMultipleOptionsStories } from './MultipleOptionsStories';
import { addSelectStories } from './SelectStories';
import { addCheckboxStories } from './CheckboxStories';
import { addTextInputStories } from './TextInputStories';

export const addFormStories = () => {
  addCalendarStories();
  addCheckboxStories();
  addDateTimeInputStories();
  addMultipleOptionsStories();
  addSelectStories();
  addTextInputStories();
};
