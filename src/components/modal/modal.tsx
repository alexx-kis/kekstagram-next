'use client';

import { basePath } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction } from '@/store/actions';
import { getCurrentPhotoId, getIsModalOpen } from '@/store/selectors';
import { isEscKey } from '@/utils/common-utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import Comments from '../comments/comments';
import ModalHeader from '../modal-header/modal-header';
import './modal.scss';

// ^======================== Modal ========================^ //

function Modal(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(getIsModalOpen);
  const currentPhotoId = useAppSelector(getCurrentPhotoId);

  const handleCloseButtonClick = () => {
    dispatch(closeModalAction());
  };

  const onEscKeydown = (e: KeyboardEvent) => {
    if (isEscKey(e)) {
      dispatch(closeModalAction());
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };

  });

  return (
    <dialog
      className={clsx(
        'modal',
        { '_open': isModalOpen }
      )}
    >
      <button
        type='button'
        className='modal__close-button'
        onClick={handleCloseButtonClick}
      >
        <Image
          src={`${basePath}img//icons/icon-cross.svg`}
          alt=''
          width={21}
          height={21}
        />
      </button>
      <div className='modal__inner'>
        <div className='modal__image-box'>
          <Image
            className='modal__image'
            src={`${basePath}/img/photos/${(Number(currentPhotoId) + 1)}.jpg`} //! сделать через find
            alt=''
            width={600}
            height={600}
          />
        </div>
        <ModalHeader bemClass='modal__header' />
        <Comments actualAmount={5} totalAmount={9} />
      </div>
    </dialog>
  );
}
export default Modal;