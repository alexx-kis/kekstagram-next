import { FilterEffect, ModalType } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModalAction, removeUploadingImageSrc } from '@/store/actions';
import { getOpenModal, getUploadingImageSrc } from '@/store/selectors';
import { isEscKey } from '@/utils/common-utils';
import { uploadFormSchema } from '@/utils/validation';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CloseModalButton from '../close-modal-button/close-modal-button';
import Effect from '../effect/effect';
import Scale from '../scale/scale';
import './upload-modal.scss';

// ^======================== UploadModal ========================^ //
type FormState = {
  hashtags: string;
  comment: string;
};

const initialFormState = {
  hashtags: [],
  comment: ''
};

function UploadModal(): React.JSX.Element {

  const openModal = useAppSelector(getOpenModal);
  const uploadingImageSrc = useAppSelector(getUploadingImageSrc);

  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => {
    dispatch(closeModalAction());
    dispatch(removeUploadingImageSrc())
  };

  const onEscKeydown = (e: KeyboardEvent) => {
    if (isEscKey(e)) {
      dispatch(closeModalAction());
      dispatch(removeUploadingImageSrc())
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  });

  useEffect(() => {
    if (openModal !== ModalType.Upload) {
      setFormState(initialFormState);
      setErrors({});
    }
  }, [openModal]);

  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const isValidField = (name: string): name is keyof FormState => {
    return ['hashtags', 'comment'].includes(name);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (!isValidField(name)) return;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validateField(name as keyof FormState, value);
  };

  const validateField = (name: keyof FormState, value: string) => {
    const result = uploadFormSchema.safeParse({
      ...formState,
      [name]: value,
    });

    if (result.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    } else {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name]?.[0] ?? '',
      }));
    }
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = uploadFormSchema.safeParse(formState);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(
          Object.entries(fieldErrors).map(([key, val]) => [key, val?.[0] ?? ''])
        ) as Partial<Record<keyof FormState, string>>
      );
      return;
    }

    console.log('form submitted', result.data);
  };


  return (
    <dialog
      className={clsx(
        'modal upload-modal',
        { '_open': openModal === ModalType.Upload }
      )}
    >
      <CloseModalButton onCloseModalButtonClick={handleCloseButtonClick} />
      <form
        className='upload-modal__form'
        onSubmit={handleFormSubmit}
      >
        <div className='upload-modal__image-box'>
          {
            uploadingImageSrc &&
            <Image
              className='upload-modal__image'
              src={uploadingImageSrc}
              alt=''
              width={600}
              height={600}
            />
          }
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
          <div className='upload-modal__field-wrapper'>
            <div className='upload-modal__field'>
              <input
                type='text'
                name='hashtags'
                className='upload-modal__input'
                placeholder='#hashtag'
                value={formState.hashtags}
                onChange={handleInputChange}
              />
            </div>
            {errors.hashtags && <p className="upload-modal__field-error">{errors.hashtags}</p>}
          </div>
          <div className='upload-modal__field-wrapper'>
            <div className='upload-modal__field'>
              <textarea
                className='upload-modal__input'
                name='comment'
                placeholder='Your comment'
                value={formState.comment}
                onChange={handleInputChange}
              />
            </div>
            {errors.comment && <p className="upload-modal__field-error">{errors.comment}</p>}
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