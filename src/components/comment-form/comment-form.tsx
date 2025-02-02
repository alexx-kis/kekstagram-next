import { basePath } from '@/constants/const';
import Image from 'next/image';
import './comment-form.scss';

// ^======================== CommentForm ========================^ //

type CommentFormProps = {
  bemClass: string;
};

function CommentForm(commentFormProps: CommentFormProps): React.JSX.Element {
  const { bemClass } = commentFormProps;
  return (
    <form className={`${bemClass} comment-form`}>
      <Image
        className='comment-form__user-avatar'
        src={`${basePath}/img/avatar-6.svg`}
        alt=''
        width={35}
        height={35}
      />
      <input type='text' className='comment-form__input' placeholder='Your comment' />
      <button type='submit' className='comment-form__button'>
        <Image
          className='comment-form__button-icon'
          src={`${basePath}/img/icons/send-icon.svg`}
          alt='send comment'
          width={34}
          height={34}
        />
      </button>
    </form>
  );
}
export default CommentForm;