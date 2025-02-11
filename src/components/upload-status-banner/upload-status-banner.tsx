import { ModalType, PostingStatus } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction, resetPostingStatus } from '@/store/actions';
import { getOpenModal, getPostingStatus } from '@/store/selectors';
import clsx from 'clsx';
import './upload-status-banner.scss';

// ^======================== UploadStatusBanner ========================^ //

function UploadStatusBanner(): React.JSX.Element {

  const openModal = useAppSelector(getOpenModal);
  const dispatch = useAppDispatch();
  const postingStatus = useAppSelector(getPostingStatus);

  const handleButtonClick = () => {
    dispatch(closeModalAction());
    dispatch(resetPostingStatus());
  };

  return (
    <div
      className={clsx(
        'success-banner',
        { '_visible': openModal === ModalType.UploadStatusBanner }
      )}
    >
      <p className='success-banner__title'>
        {
          postingStatus === PostingStatus.Posted
            ? 'The image is successfully uploaded'
            : 'File uploading error'
        }
      </p>
      <button
        type='button'
        className='success-banner__button'
        onClick={handleButtonClick}
      >
        {
          postingStatus === PostingStatus.Posted
            ? 'Cool!'
            : 'Try again later'
        }
      </button>
    </div>
  );
}
export default UploadStatusBanner;