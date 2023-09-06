// 주어진 문자열의 첫 글자를 대문자로 변환, 나머지 부분은 그대로 유지하는 함수
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { capitalize };
