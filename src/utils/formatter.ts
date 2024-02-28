const numberWithCommas = (
  value: string | number | undefined | null,
  decimal: number = 0
): string | undefined => {
  if (value === '' || value === undefined || value === null) return;

  const str =
    typeof value === 'number'
      ? value.toFixed(decimal)
      : parseFloat(value).toFixed(decimal);

  const [integerPart, decimalPart] = str.split('.');
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart
    ? `${integerWithCommas}.${decimalPart}`
    : integerWithCommas;
};

const truncateWithEllipsis = (
  value: string | number | undefined | null,
  start = 6,
  end = 6
): string | undefined => {
  if (value === '' || value === undefined || value === null) return;

  const str = String(value);
  const strLength = str.length;

  if (strLength <= start + end) {
    return str;
  }

  const startString = str.slice(0, start);
  const endString = str.slice(-end);

  return `${startString}...${endString}`;
};

const dateDiff = (
  start: string | number | Date | null,
  end: string | number | Date | null
):
  | {
      isReverse: boolean;
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
    }
  | undefined => {
  if (start === '' || start === undefined || start === null) return;
  if (end === '' || end === undefined || end === null) return;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const isReverse = startDate.getTime() > endDate.getTime();

  const [past, future] = isReverse
    ? [endDate, startDate]
    : [startDate, endDate];

  let years = future.getFullYear() - past.getFullYear();
  let months = future.getMonth() - past.getMonth();
  let days = future.getDate() - past.getDate();
  let hours = future.getHours() - past.getHours();
  let minutes = future.getMinutes() - past.getMinutes();
  let seconds = future.getSeconds() - past.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const lastDate = new Date(past.getFullYear(), past.getMonth() + 1, 0);
    const lastDay = lastDate.getDate();
    days += lastDay;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    isReverse,
    year: years,
    month: months,
    day: days,
    hour: hours,
    minute: minutes,
    second: seconds,
  };
};

const getTimeElapsed = (
  date: string | number | Date | null,
  suffix = 'ago',
  nowText = 'just now'
): string => {
  if (date === '' || date === undefined || date === null) return 'unknown';

  const elapsed = dateDiff(date, new Date());
  if (elapsed === undefined) return 'unknown';

  const elapsedText = (value: number, unit: string): string => {
    const newSuffix = suffix ? `${suffix}` : '';
    const newUnit = value > 1 ? `${unit}s` : unit;

    return `${value} ${newUnit}${newSuffix}`;
  };

  if (elapsed.year > 0) return elapsedText(elapsed.year, 'year');
  if (elapsed.month > 0) return elapsedText(elapsed.month, 'month');
  if (elapsed.day > 0) return elapsedText(elapsed.day, 'day');
  if (elapsed.hour > 0) return elapsedText(elapsed.hour, 'hour');
  if (elapsed.minute > 0) return elapsedText(elapsed.minute, 'min');
  if (elapsed.second > 0) return elapsedText(elapsed.second, 'sec');

  return nowText;
};

export default {
  numberWithCommas,
  truncateWithEllipsis,
  dateDiff,
  getTimeElapsed,
};
