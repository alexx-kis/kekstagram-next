import { basePath } from '@/constants/const';
import Image from 'next/image';
import './close-modal-button.scss';

// ^======================== CloseModalButton ========================^ //
type CloseModalButtonProps = {
  onCloseModalButtonClick: () => void;
};
function CloseModalButton(closeModalButtonProps: CloseModalButtonProps): React.JSX.Element {
  const { onCloseModalButtonClick } = closeModalButtonProps;
  return (
    <button
      type='button'
      className='close-modal-button'
      onClick={onCloseModalButtonClick}
    >
      <Image
        src={`${basePath}/img/icons/icon-cross.svg`}
        alt=''
        width={21}
        height={21}
      />
    </button>
  );
}
export default CloseModalButton;