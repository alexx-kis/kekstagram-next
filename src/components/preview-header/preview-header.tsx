import { basePath } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getCurrentPhoto } from '@/store/selectors';
import Image from 'next/image';
import LikesButton from '../likes-button/likes-button';
import './preview-header.scss';

// ^======================== PreviewHeader ========================^ //

type PreviewHeaderProps = {
  bemClass: string;
};

function PreviewHeader(previewHeaderProps: PreviewHeaderProps): React.JSX.Element {

  const { bemClass } = previewHeaderProps;
  const photo = useAppSelector(getCurrentPhoto);

  return (
    <div className={`${bemClass} preview-header`}>
      <Image
        className='preview-header__user-avatar'
        src={`${basePath}/img/avatar-1.svg`}
        alt=''
        width={35}
        height={35}
      />
      <p className='preview-header__description'>
        {photo?.description}
      </p>
      <div className='preview-header__likes'>
        <p className='preview-header__likes-text'>
          Likes
        </p>
        <LikesButton bemClass='preview-header__likes-button' />
      </div>
    </div>
  );
}
export default PreviewHeader;