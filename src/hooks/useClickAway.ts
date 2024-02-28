import * as React from 'react';

type UseClickAwayProps = {
  callback: () => void;
};

const useClickAway = <T extends HTMLElement>({
  callback,
}: UseClickAwayProps): { ref: React.Ref<T> } => {
  const ref = React.useRef<T>(null);

  const handleClickAway = React.useCallback(
    (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const currentRef = ref.current;

      if (currentRef && !currentRef.contains(target)) {
        callback();
      }
    },
    [callback, ref]
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('touchstart', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('touchstart', handleClickAway);
    };
  }, [callback, handleClickAway]);

  return { ref };
};

export default useClickAway;
