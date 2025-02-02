import Image from 'next/image';
import './comment.scss';

// ^======================== Comment ========================^ //

type CommentProps = {
  bemClass: string;
  commentText: string;
  commentUserAvatar: string;
};

function Comment(commentProps: CommentProps): React.JSX.Element {
  const { bemClass, commentText, commentUserAvatar } = commentProps;

  return (
    <li className={`${bemClass} comment`}>
      <Image
        className='comment__user-avatar'
        src={commentUserAvatar}
        alt=''
        width={35}
        height={35}
      />
      <p className='comment__text'>
        {commentText}
      </p>
    </li>
  );
}
export default Comment;