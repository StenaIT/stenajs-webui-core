import { addDateRangeCalendarStories } from './calendar/DateRangeCalendarStories';
import { addsDateRangeCalendarWithStateStories } from './calendar/DateRangeCalendarWithStateStories';
import { addSingleDateCalendarStories } from './calendar/SingleDateCalendarStories';
import { addSingleWeekCalendarStories } from './calendar/SingleWeekCalendarStories';

export const addCalendarStories = () => {
  addSingleDateCalendarStories();
  addDateRangeCalendarStories();
  addsDateRangeCalendarWithStateStories();
  addSingleWeekCalendarStories();
};
