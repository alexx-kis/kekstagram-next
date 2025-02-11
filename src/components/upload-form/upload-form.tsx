import { basePath, ModalType } from '@/constants/const';
import { useAppDispatch } from '@/hooks';
import { openModalAction } from '@/store/actions';
import './upload-form.scss';

// ^======================== UploadForm ========================^ //

function UploadForm(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const onUploadInputChange = () => {
    dispatch(openModalAction(ModalType.Upload));
  };

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
            />
            Upload
          </label>
        </div>
      </div>
    </form>
  );
}
export default UploadForm;