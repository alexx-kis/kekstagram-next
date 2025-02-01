import { basePath } from '@/constants/const';
import Image from 'next/image';
import './comment.scss';

// ^======================== Comment ========================^ //
type CommentProps = {
  bemClass: string;
};
function Comment(commentProps: CommentProps): React.JSX.Element {
  const { bemClass } = commentProps;
  return (
    <li className={`${bemClass} comment`}>
      <Image
        className='comment__user-avatar'
        src={`${basePath}/img/icons/avatar-2.svg`}
        alt=''
        width={35}
        height={35}
      />
      <p className='comment__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe voluptatum maxime, iure in dolorum.
      </p>
    </li>
  );
}
export default Comment;