import { basePath } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getCurrentPhoto } from '@/store/selectors';
import Icon from '../icon/icon';
import './likes-button.scss';

// ^======================== LikesButton ========================^ //

type LikesButtonProps = {
  bemClass: string;
};

function LikesButton(likesButtonProps: LikesButtonProps): React.JSX.Element {
  const { bemClass } = likesButtonProps;
  const currentPhoto = useAppSelector(getCurrentPhoto);

  return (
    <button type='button' className={`${bemClass} likes-button`}>
      <Icon
        className='likes-button__icon'
        src={`${basePath}/img/icons/heart-icon.svg`}
        width={20}
        height={18}
      />
      <p className='likes-button__count'>
        {currentPhoto?.likes}
      </p>
    </button>
  );
}
export default LikesButton;