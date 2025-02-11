import { basePath, FILE_TYPES, ModalType, PostingStatus } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { openModalAction, setUploadingImageSrc } from '@/store/actions';
import { getOpenModal, getPostingStatus, getUploadingImageSrc } from '@/store/selectors';
import { useEffect, useRef } from 'react';
import './upload-form.scss';

// ^======================== UploadForm ========================^ //

function UploadForm(): React.JSX.Element {
  const uploadingImageSrc = useAppSelector(getUploadingImageSrc);
  const postingStatus = useAppSelector(getPostingStatus);
  const openModal = useAppSelector(getOpenModal);

  const dispatch = useAppDispatch();

  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const onUploadInputChange = () => {
    dispatch(openModalAction(ModalType.Upload));
    if (uploadInputRef.current && !uploadingImageSrc) {
      const file = uploadInputRef.current.files?.[0];
      const fileName = file?.name.toLowerCase();
      const isAcceptableType = FILE_TYPES.some((type) => fileName?.endsWith(type));

      if (isAcceptableType && file) {
        const src = URL.createObjectURL(file);
        dispatch(setUploadingImageSrc(src));
      }
    }
  };

  useEffect(() => {
    if (postingStatus === PostingStatus.Unknown && uploadInputRef.current && openModal === ModalType.Upload) {
      uploadInputRef.current.value = '';
    }
  }, [postingStatus, openModal]);


  return (
    <form
      className='upload-form'
      style={{
        backgroundImage: `url(${basePath}/img/logo-background-1.jpg)`
      }}
    >
      <div
        className='upload-form__mask'
        style={{
          backgroundImage: `url(${basePath}/img/logo-mask.png)`
        }}
      >
        <div
          className='upload-form__field'
          style={{
            backgroundImage: `url(${basePath}/img/upload-button-bg.png)`
          }}
        >
          <label
            className='upload-form__label'
            style={{
              backgroundImage: `url(${basePath}/img/icons/upload-button.svg)`
            }}
          >
            <input
              type='file'
              className='upload-form__input'
              onChange={onUploadInputChange}
              ref={uploadInputRef}
            />
            Upload
          </label>
        </div>
      </div>
    </form>
  );
}
export default UploadForm;