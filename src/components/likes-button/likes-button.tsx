import { basePath } from '@/constants/const';
import Icon from '../icon/icon';
import './likes-button.scss';

// ^======================== LikesButton ========================^ //

type LikesButtonProps = {
  bemClass: string;
};

function LikesButton(likesButtonProps: LikesButtonProps): React.JSX.Element {
  const { bemClass } = likesButtonProps;
  return (
    <button type='button' className={`${bemClass} likes-button`}>
      <Icon
        className='likes-button__icon'
        src={`${basePath}/img/icons/heart-icon.svg`}
        width={20}
        height={18}
      />
      <p className='likes-button__count'>
        11
      </p>
    </button>
  );
}
export default LikesButton;