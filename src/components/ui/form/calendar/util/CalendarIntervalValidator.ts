import { format, isAfter, parse } from 'date-fns';

export interface DateInterval {
  startDate?: Date;
  endDate?: Date;
}

export interface DateStringInterval {
  startDate?: string;
  endDate?: string;
}

export const transformDateIntervalToDateStringInterval = (
  interval: DateInterval,
): DateStringInterval => ({
  startDate: interval.startDate && format(interval.startDate, 'YYYY-MM-dd'),
  endDate: interval.endDate && format(interval.endDate, 'YYYY-MM-dd'),
});

export const transformDateStringIntervalToDateInterval = (
  interval: DateStringInterval,
): DateInterval => {
  const now = new Date();
  return {
    startDate:
      (interval.startDate && parse(interval.startDate, 'YYYY-MM-dd', now)) ||
      undefined,
    endDate:
      (interval.endDate && parse(interval.endDate, 'YYYY-MM-dd', now)) ||
      undefined,
  };
};

export const ensureStartIsFirst = (interval: DateInterval): DateInterval => {
  if (
    interval.startDate &&
    interval.endDate &&
    isAfter(interval.startDate, interval.endDate)
  ) {
    return {
      startDate: interval.endDate,
      endDate: interval.startDate,
    };
  }
  return interval;
};
