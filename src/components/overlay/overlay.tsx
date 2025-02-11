'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction } from '@/store/actions';
import { getOpenModal } from '@/store/selectors';
import clsx from 'clsx';
import './overlay.scss';

// ^======================== Overlay ========================^ //

function Overlay(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(getOpenModal);

  const handleOverlayClick = () => {
    dispatch(closeModalAction());
  };

  return (
    <div
      className={clsx(
        'overlay',
        { '_visible': openModal }
      )}
      onClick={handleOverlayClick}
    ></div>
  );
}
export default Overlay;