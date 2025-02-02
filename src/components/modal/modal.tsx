'use client';

import { basePath } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction } from '@/store/actions';
import { getCurrentPhoto, getIsModalOpen } from '@/store/selectors';
import { isEscKey } from '@/utils/common-utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import CloseModalButton from '../close-modal-button/close-modal-button';
import CommentForm from '../comment-form/comment-form';
import Comments from '../comments/comments';
import ModalHeader from '../modal-header/modal-header';
import './modal.scss';

// ^======================== Modal ========================^ //

function Modal(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(getIsModalOpen);
  const currentPhoto = useAppSelector(getCurrentPhoto);

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
      <CloseModalButton onCloseModalButtonClick={handleCloseButtonClick} />
      <div className='modal__inner'>
        {currentPhoto && isModalOpen &&
          <> <div className='modal__image-box'>
            <Image
              className='modal__image'
              src={`${basePath}/img/${currentPhoto.url}`}
              alt=''
              width={600}
              height={600}
            />
          </div>
            <ModalHeader bemClass='modal__header' />
            <Comments />
          </>
        }
        <CommentForm bemClass='comments__form' />
      </div>
    </dialog>
  );
}
export default Modal;