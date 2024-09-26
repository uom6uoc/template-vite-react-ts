import * as React from 'react';

import { BREAKPOINTS } from '~/app/constant';
import { debounce } from '~/utils/performance';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const getDeviceType = (): DeviceType => {
  const width = window.innerWidth;
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
};

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] =
    React.useState<DeviceType>(getDeviceType());

  const handleResize = React.useCallback(() => {
    const type = getDeviceType();
    setDeviceType(type);
  }, []);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return (): void => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [handleResize]);

  return deviceType;
};

export default useDeviceType;
