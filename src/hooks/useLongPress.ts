import * as React from 'react';

type UseLongPressProps = {
  callback: () => void;
  ms?: number;
};

const useLongPress = <T extends HTMLElement>({
  callback,
  ms = 3000,
}: UseLongPressProps): { ref: React.Ref<T> } => {
  const timeout = React.useRef<number | undefined>();
  const ref = React.useRef<T>(null);

  const pressStart = React.useCallback(() => {
    timeout.current = window.setTimeout(callback, ms);
  }, [callback, ms]);

  const pressStop = () => {
    if (timeout.current) {
      window.clearTimeout(timeout.current);
    }
  };

  React.useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('mousedown', pressStart);
      element.addEventListener('mouseup', pressStop);
      element.addEventListener('mouseleave', pressStop);

      return () => {
        element.removeEventListener('mousedown', pressStart);
        element.removeEventListener('mouseup', pressStop);
        element.removeEventListener('mouseleave', pressStop);
      };
    }
  }, [callback, pressStart]);

  return { ref };
};

export default useLongPress;
