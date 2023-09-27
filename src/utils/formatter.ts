const numberWithCommas = (value: number): string => {
  const [integerPart, decimalPart] = String(value).split('.');

  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart
    ? `${integerWithCommas}.${decimalPart}`
    : integerWithCommas;
};

const truncateWithEllipsis = (str: string, start = 6, end = 5): string => {
  const strLength = str.length;

  if (strLength <= start + end) {
    return str;
  }

  const startString = str.slice(0, start);
  const endString = str.slice(-end);

  return `${startString}...${endString}`;
};

const getTimeElapsed = (date: string | Date): string => {
  const now = new Date();
  const target = new Date(date);

  const diffMilliseconds = now.getTime() - target.getTime();
  const diffSeconds = Math.floor(diffMilliseconds / 1000);

  // 초, 분, 시간, 일, 월, 년 단위로 경과 시간을 계산
  const years = now.getFullYear() - target.getFullYear();
  const months = now.getMonth() - target.getMonth() + years * 12;
  const days = Math.floor(diffSeconds / (3600 * 24));
  const hours = Math.floor(diffSeconds / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  const seconds = diffSeconds % 60;

  // 경과 시간에 따라 적절한 문자열을 생성
  if (years > 0) return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  if (months > 0) return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  if (days > 0) return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  if (hours > 0) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  if (minutes > 0) return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
  if (seconds > 0) return `${seconds} ${seconds === 1 ? 'sec' : 'secs'} ago`;

  return `just now`;
};

const getSecElapsed = (date: string | Date): string => {
  const now = Date.now();
  const then = new Date(date).getTime();
  const seconds = Math.floor((now - then) / 1000);
  return `${seconds} sec ago`;
};

export default {
  numberWithCommas,
  truncateWithEllipsis,
  getTimeElapsed,
  getSecElapsed,
};
