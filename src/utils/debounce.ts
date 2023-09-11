/* eslint-disable @typescript-eslint/no-explicit-any */

type DebouncedFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay = 250
): DebouncedFunction<T> => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};

export default debounce;
