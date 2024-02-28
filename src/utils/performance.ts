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

type ThrottledFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit = 250
): ThrottledFunction<T> => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

type WrappedFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

const wrapEvent = <T extends (...args: any[]) => any>(
  func: T
): WrappedFunction<T> => {
  return (...args: Parameters<T>) => {
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    func(...args);
  };
};

export { debounce, throttle, wrapEvent };
