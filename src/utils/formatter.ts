// 주어진 dateString을 JavaScript Date 객체로 파싱하는 함수
const parseDateString = (dateString: string): Date => new Date(dateString);

// 현재 시간과 주어진 dateString 사이의 경과 시간을 문자열로 반환하는 함수
const elapsedTime = (dateString: string): string => {
  const now = new Date();
  const targetDate = parseDateString(dateString);

  // 현재 시간과 목표 시간 사이의 밀리초 단위의 시간 차이를 계산
  const timeDifferenceInMilliseconds = now.getTime() - targetDate.getTime();

  // 초 단위로 변환
  const timeDifferenceInSeconds = Math.floor(
    timeDifferenceInMilliseconds / 1000
  );

  // 초, 분, 시간, 일, 월, 년 단위로 경과 시간을 계산
  const seconds = timeDifferenceInSeconds % 60;
  const minutes = Math.floor((timeDifferenceInSeconds % 3600) / 60);
  const hours = Math.floor(timeDifferenceInSeconds / 3600);
  const days = Math.floor(timeDifferenceInSeconds / (3600 * 24));
  const months =
    now.getMonth() -
    targetDate.getMonth() +
    12 * (now.getFullYear() - targetDate.getFullYear());
  const years = now.getFullYear() - targetDate.getFullYear();

  // 경과 시간에 따라 적절한 문자열을 생성
  let elapsed = 'Just now';
  if (years > 0) elapsed = `${years} ${years === 1 ? 'year' : 'years'} ago`;
  else if (months > 0)
    elapsed = `${months} ${months === 1 ? 'month' : 'months'} ago`;
  else if (days > 0) elapsed = `${days} ${days === 1 ? 'day' : 'days'} ago`;
  else if (hours > 0)
    elapsed = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  else if (minutes > 0)
    elapsed = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  else if (seconds > 0)
    elapsed = `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;

  return elapsed;
};

// 주어진 dateString을 'yyyy/mm/dd' 형식의 날짜 문자열로 포맷하는 함수
const formatDate = (dateString: string): string => {
  const targetDate = parseDateString(dateString);
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

// 주어진 dateString을 'hh:mm' 형식의 시간 문자열로 포맷하는 함수
const formatTime = (dateString: string): string => {
  const targetDate = parseDateString(dateString);
  const hours = String(targetDate.getHours()).padStart(2, '0');
  const minutes = String(targetDate.getMinutes()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};

// 다른 모듈에서 사용할 수 있도록 함수를 익스포트
export { formatDate, formatTime, elapsedTime };
