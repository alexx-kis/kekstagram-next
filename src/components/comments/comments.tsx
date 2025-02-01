import Comment from '../comment/comment';
import './comments.scss';

// ^======================== Comments ========================^ //
type CommentsProps = {
  actualAmount: number;
  totalAmount: number;
};
function Comments(commentsProps: CommentsProps): React.JSX.Element {
  const { actualAmount, totalAmount } = commentsProps;
  return (
    <div className='comments'>
      <p className='comments__amount'>
        <span className='comments__amount-actual'>
          {actualAmount}
        </span>
        of
        <span className='comments__amount-total'>
          {totalAmount}
        </span>
        comments
      </p>
      <ul className='comments__list'>
        <Comment bemClass='comments__list-item'/>
      </ul>
    </div>
  );
}
export default Comments;