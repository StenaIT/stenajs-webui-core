import { addDateRangeCalendarStories } from './calendar/DateRangeCalendarStories';
import { addsDateRangeCalendarWithStateStories } from './calendar/DateRangeCalendarWithStateStories';
import { addSingleDateCalendarStories } from './calendar/SingleDateCalendarStories';

export const addCalendarStories = () => {
  addSingleDateCalendarStories();
  addDateRangeCalendarStories();
  addsDateRangeCalendarWithStateStories();
};
