/* 
  - type CamelCaseObject = ConvertKeys<SnakeCaseObject, true>;
*/

// SnakeCase를 CamelCase로 변환하는 타입
type SnakeToCamel<S extends string> = S extends
  | `${infer T}_${infer U}`
  | `${infer T}-${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamel<U>>}`
  : S;

type DataTransformer<T> = T extends string | number | boolean | null // 기본 타입일 경우 그대로 반환
  ? T
  : T extends (infer U)[]
  ? DataTransformer<U>[] // 배열일 경우 요소를 재귀 호출하여 변환
  : T extends object
  ? {
      [K in keyof T as K extends `_${infer S}`
        ? `_${SnakeToCamel<S>}` // key 값이 '_'로 시작하는 경우
        : `${SnakeToCamel<string & K>}`]: DataTransformer<T[K]>;
    } // 객체일 경우 key 값을 변환하여 재귀 호출
  : T; // 그 외의 경우 그대로 반환

interface DataObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/* 
  USE CASE FUNCTION
  - snakeToCamel('snake_case') => camelCase
  - dataTransformer('snake_case') => camelCase & dataTransformer('_snake_case') => _camelCase, CAN USE OBJECT AND ARRAY
*/

const snakeToCamel = (snakeCaseString: string): string => {
  return snakeCaseString.replace(/([-_][a-z])/g, (match) =>
    match.toUpperCase().replace('-', '').replace('_', '')
  );
};

const dataTransformer = <T extends DataObject>(data: T): DataTransformer<T> => {
  // 키를 변환하는 함수
  const targetKey = (key: string) => {
    return key.startsWith('_')
      ? `_${snakeToCamel(key.slice(1))}`
      : snakeToCamel(key);
  };

  // 배열인 경우 각 요소를 변환하고 배열로 반환
  if (Array.isArray(data)) {
    return data.map((item) => dataTransformer(item)) as DataTransformer<T>;
  }

  // 객체인 경우 속성을 변환하여 새 객체로 반환
  if (typeof data === 'object' && data !== null) {
    const result: DataObject = {};
    for (const key in data) {
      result[targetKey(key)] = dataTransformer(data[key]);
    }
    return result as DataTransformer<T>;
  }

  // 기본 타입인 경우 그대로 반환
  return data;
};

// 주어진 문자열의 첫 글자를 대문자로 변환, 나머지 부분은 그대로 유지하는 함수
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default { capitalize, snakeToCamel, dataTransformer };
