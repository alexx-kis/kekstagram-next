'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getIsModalOpen } from '@/store/selectors';
import clsx from 'clsx';
import './overlay.scss';
import { closeModalAction } from '@/store/actions';

// ^======================== Overlay ========================^ //

function Overlay(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(getIsModalOpen);
  const handleOverlayClick = () => {
    dispatch(closeModalAction());
  };
  return (
    <div
      className={clsx(
        'overlay',
        { '_visible': isModalOpen }
      )}
      onClick={handleOverlayClick}
    ></div>
  );
}
export default Overlay;