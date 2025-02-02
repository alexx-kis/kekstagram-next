import { basePath, FilterEffect } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction } from '@/store/actions';
import { getIsUploadModalOpen } from '@/store/selectors';
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

  const isUploadModalOpen = useAppSelector(getIsUploadModalOpen);
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
        { '_open': isUploadModalOpen },
        '_open'
      )}
    >
      <CloseModalButton onCloseModalButtonClick={handleCloseButtonClick} />
      <div className='upload-modal__inner'>
        <div className='upload-modal__image-box'>
          <Image
            className='upload-modal__image'
            src={`${basePath}/img/upload-default-image.jpg`}
            alt=''
            width={600}
            height={600}
          />
          <Scale bemClass='upload-modal__scale' />
          <div className='effects'>
            <ul className='effects__list'>
              {Object.values(FilterEffect).map((item) => (
                <Effect key={item} name={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </dialog>
  );
}
export default UploadModal;