import { DataStatus, ERROR_BANNER_TIMEOUT } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getDataStatus } from '@/store/selectors';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import './error-banner.scss';

// ^======================== ErrorBanner ========================^ //

function ErrorBanner(): React.JSX.Element {
  const dataStatus = useAppSelector(getDataStatus);
  const errorBannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (errorBannerRef.current) {
      setTimeout(() => {
        errorBannerRef.current?.classList.remove('_visible');
      }, ERROR_BANNER_TIMEOUT);
    }
  }, []);

  return (
    <div
      className={clsx(
        'error-banner',
        { '_visible': dataStatus === DataStatus.Error }
      )}
      ref={errorBannerRef}
    >
      Data loading failed
    </div>
  );
}
export default ErrorBanner;