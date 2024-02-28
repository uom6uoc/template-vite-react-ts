import * as React from 'react';

const useScrollLock = (
  selector: string
): {
  lockScroll: (isLocked: boolean) => void;
  isScrollLocked: boolean;
} => {
  const [isScrollLocked, setIsScrollLocked] = React.useState<boolean>(false);

  const lockScroll = React.useCallback(
    (isLocked: boolean) => {
      const element = document.querySelector(
        `${selector}`
      ) as HTMLElement | null;
      if (element === null) return;

      element.style.overflow = isLocked ? 'hidden' : 'auto';
      setIsScrollLocked(isLocked);
    },
    [selector]
  );

  return { lockScroll, isScrollLocked };
};

export default useScrollLock;
