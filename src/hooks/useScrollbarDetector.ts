import * as React from 'react';

import { debounce } from '~/utils/performance';

import type { RefObject } from 'react';

type ScrollbarDirections = 'width' | 'height';

const useScrollbarDetector = (
  elementRef: RefObject<HTMLElement>,
  direction: ScrollbarDirections,
  option?: unknown
): boolean => {
  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  const checkScrollbar = React.useCallback(() => {
    if (elementRef.current) {
      let hasScrollbar = false;

      if (direction === 'width') {
        hasScrollbar =
          elementRef.current.scrollWidth > elementRef.current.clientWidth;
      } else if (direction === 'height') {
        hasScrollbar =
          elementRef.current.scrollHeight > elementRef.current.clientHeight;
      }

      setHasScrollbar(hasScrollbar);
    }
  }, [elementRef, direction]);

  const handleResize = React.useCallback(() => {
    debounce(checkScrollbar, 200)();
  }, [checkScrollbar]);

  React.useEffect(() => {
    checkScrollbar();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [checkScrollbar, handleResize, option]);

  return hasScrollbar;
};

export default useScrollbarDetector;
