'use client';

import { basePath, ModalType } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction, removeCurrentPhoto } from '@/store/actions';
import { getCurrentPhoto, getOpenModal } from '@/store/selectors';
import { isEscKey } from '@/utils/common-utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import CloseModalButton from '../close-modal-button/close-modal-button';
import CommentForm from '../comment-form/comment-form';
import Comments from '../comments/comments';
import PreviewHeader from '../preview-header/preview-header';
import './preview.scss';

// ^======================== Preview ========================^ //

function Preview(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const openModal = useAppSelector(getOpenModal);
  const currentPhoto = useAppSelector(getCurrentPhoto);

  const isPreviewOpen = openModal === ModalType.Preview;

  const handleCloseButtonClick = () => {
    dispatch(closeModalAction());
    dispatch(removeCurrentPhoto());
  };

  const onEscKeydown = (e: KeyboardEvent) => {
    if (isEscKey(e)) {
      dispatch(closeModalAction());
      dispatch(removeCurrentPhoto());
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
        'modal preview',
        { '_open': isPreviewOpen }
      )}
    >
      <CloseModalButton onCloseModalButtonClick={handleCloseButtonClick} />
      <div className='preview__inner'>
        {currentPhoto && isPreviewOpen &&
          <> <div className='preview__image-box'>
            <Image
              className='preview__image'
              src={`${basePath}/img/${currentPhoto.url}`}
              alt=''
              width={600}
              height={600}
            />
          </div>
            <PreviewHeader bemClass='preview__header' />
            <Comments />
          </>
        }
        <CommentForm bemClass='preview__form' />
      </div>
    </dialog>
  );
}
export default Preview;