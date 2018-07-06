import {
  addDays,
  addHours,
  addWeeks,
  eachDayOfInterval,
  format,
  getDate,
  getISODay,
  getISOWeek,
  getMonth,
  getYear,
  startOfISOWeek,
} from 'date-fns';

export enum Months {
  JANUARY = 0,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

export enum WeekDays {
  SUNDAY = 0,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export interface DayData {
  name: string;
  date: Date; // YYYY-MM
  dateString: string; // YYYY-MM
  weekNumber: number;
  year: number; // 2018
  month: number; // 0-11
  dayOfMonth: number; // 1-31
  dayOfWeek: number; // 1-7
}

export interface WeekData {
  weekNumber: number;
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
  days: Array<DayData>;
}

export interface MonthData {
  monthString: string;
  name: string;
  year: number;
  monthInYear: number;
  weeks: Array<WeekData>;
}

export const getMonthsInYear = (
  year: number,
  startMonth: number,
  numMonths: number,
): Array<MonthData> => {
  const months = [];
  for (let i = 0; i < numMonths; i++) {
    months.push(getMonthInYear(year, startMonth + i));
  }
  return months;
};

export const getMonthInYear = (year: number, month: number): MonthData => {
  const yearToUse = year + Math.floor(month / 12);
  const monthToUse = month % 12;
  const firstDayOfMonth = new Date(yearToUse, monthToUse, 1);
  return {
    monthString: format(firstDayOfMonth, 'YYYY-MM'),
    name: format(firstDayOfMonth, 'MMMM'),
    year: yearToUse,
    monthInYear: monthToUse,
    weeks: getWeeksForMonth(yearToUse, monthToUse),
  };
};

export const getWeeksForMonth = (
  year: number,
  month: number,
  forceSixWeeks: boolean = true,
): Array<WeekData> => {
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfFirstWeek = startOfISOWeek(firstDayOfMonth);
  const weeks = [];
  for (let i = 0; i < 6; i++) {
    const week = getWeekForDate(addWeeks(firstDayOfFirstWeek, i));
    if (i > 0 && week.startMonth !== month && !forceSixWeeks) {
      return weeks;
    }
    weeks.push(week);
  }
  return weeks;
};

export const getWeekForDate = (firstDayOfWeek: Date): WeekData => ({
  weekNumber: getISOWeek(firstDayOfWeek),
  startMonth: getMonth(firstDayOfWeek),
  startYear: getYear(firstDayOfWeek),
  endMonth: getMonth(addDays(firstDayOfWeek, 6)),
  endYear: getYear(addDays(firstDayOfWeek, 6)),
  days: getDaysForWeekForDate(firstDayOfWeek),
});

export const createDay = (date: Date): DayData => ({
  date,
  name: format(date, 'EEE'),
  dateString: format(addHours(date, 12), 'YYYY-MM-dd'),
  weekNumber: getISOWeek(date),
  year: getYear(date),
  month: getMonth(date),
  dayOfMonth: getDate(date),
  dayOfWeek: getISODay(date),
});

export const getDaysForWeekForDate = (firstDayOfWeek: Date): Array<DayData> => {
  return eachDayOfInterval({
    start: firstDayOfWeek,
    end: addDays(firstDayOfWeek, 6),
  }).map(createDay);
};

export const calculateOverflowingMonth = (
  year: number,
  month: number,
): { year: number; month: number } => {
  if (month > Months.DECEMBER) {
    return { year: year + Math.floor(month / 12), month: month % 12 };
  }
  if (month < Months.JANUARY) {
    return { year: year + Math.floor(month / 12), month: 12 + month % 12 };
  }
  return { year, month };
};
