import { FilterEffect, ModalType } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction } from '@/store/actions';
import { getOpenModal, getUploadingImageSrc } from '@/store/selectors';
import { isEscKey } from '@/utils/common-utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import CloseModalButton from '../close-modal-button/close-modal-button';
import Effect from '../effect/effect';
import Scale from '../scale/scale';
import './upload-modal.scss';

// ^======================== UploadModal ========================^ //

function UploadModal(): React.JSX.Element {

  const openModal = useAppSelector(getOpenModal);
  const uploadingImageSrc = useAppSelector(getUploadingImageSrc);

  const dispatch = useAppDispatch();

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
        'modal upload-modal',
        { '_open': openModal === ModalType.Upload }
      )}
    >
      <CloseModalButton onCloseModalButtonClick={handleCloseButtonClick} />
      <form className='upload-modal__form'>
        <div className='upload-modal__image-box'>
          <Image
            className='upload-modal__image'
            src={uploadingImageSrc!}
            alt=''
            width={600}
            height={600}
          />
          <Scale bemClass='upload-modal__scale' />
        </div>
        <div className='upload-modal__effects'>
          <ul className='upload-modal__effects-list'>
            {Object.values(FilterEffect).map((item) => (
              <Effect key={item} name={item} />
            ))}
          </ul>
        </div>
        <div className='upload-modal__fieldset'>
          <div className='upload-modal__field'>
            <input type='text' className='upload-modal__input' placeholder='#hashtag' />
          </div>
          <div className='upload-modal__field'>
            <textarea className='upload-modal__input' placeholder='Your comment' />
          </div>
        </div>
        <button type='submit' className='upload-modal__button'>
          Post
        </button>
      </form>
    </dialog>
  );
}
export default UploadModal;