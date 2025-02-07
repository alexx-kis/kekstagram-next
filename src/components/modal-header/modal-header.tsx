import { basePath } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getCurrentPhoto } from '@/store/selectors';
import Image from 'next/image';
import LikesButton from '../likes-button/likes-button';
import './modal-header.scss';

// ^======================== ModalHeader ========================^ //

type ModalHeaderProps = {
  bemClass: string;
};

function ModalHeader(modalHeaderProps: ModalHeaderProps): React.JSX.Element {

  const { bemClass } = modalHeaderProps;
  const photo = useAppSelector(getCurrentPhoto);

  return (
    <div className={`${bemClass} modal-header`}>
      <Image
        className='modal-header__user-avatar'
        src={`${basePath}/img/avatar-1.svg`}
        alt=''
        width={35}
        height={35}
      />
      <p className='modal-header__description'>
        {photo?.description}
      </p>
      <div className='modal-header__likes'>
        <p className='modal-header__likes-text'>
          Likes
        </p>
        <LikesButton bemClass='modal-header__likes-button' />
      </div>
    </div>
  );
}
export default ModalHeader;