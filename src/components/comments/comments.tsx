import { basePath, ModalType, SHOWN_COMMENTS_STEP } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getCurrentPhoto, getOpenModal } from '@/store/selectors';
import { useEffect, useState } from 'react';
import Comment from '../comment/comment';
import LoadMoreButton from '../load-more-button/load-more-button';
import './comments.scss';

// ^======================== Comments ========================^ //

function Comments(): React.JSX.Element {
  const openModal = useAppSelector(getOpenModal);
  const currentPhoto = useAppSelector(getCurrentPhoto);
  const comments = currentPhoto?.comments;
  const totalCommentsAmount = comments?.length;
  const initialShownCommentsAmount = totalCommentsAmount! >= 5 ? SHOWN_COMMENTS_STEP : totalCommentsAmount;

  const [shownCommentsAmount, setShownCommentsAmount] = useState(initialShownCommentsAmount);

  const restCommentsAmount = totalCommentsAmount! - shownCommentsAmount!;
  const shownCommentsStep = restCommentsAmount >= 5
    ? SHOWN_COMMENTS_STEP
    : restCommentsAmount;

  const handleLoadMoreButtonClick = () => {
    setShownCommentsAmount(shownCommentsAmount! + shownCommentsStep);
  };

  useEffect(() => {
    if (openModal !== ModalType.Preview) {
      setShownCommentsAmount(initialShownCommentsAmount);
    }
  }, [openModal, initialShownCommentsAmount]);

  return (
    <div className='comments'>
      <p className='comments__amount'>
        <span className='comments__amount-actual'>
          {shownCommentsAmount}
        </span>
        of
        <span className='comments__amount-total'>
          {totalCommentsAmount}
        </span>
        comments
      </p>
      <ul className='comments__list'>
        {
          comments?.slice(0, shownCommentsAmount).map((comment) =>
            <Comment
              key={comment.id}
              bemClass='comments__list-item'
              commentText={comment.message}
              commentUserAvatar={`${basePath}/${comment.avatar}`}
            />
          )
        }
      </ul>
      {
        totalCommentsAmount! > shownCommentsAmount! &&
        <LoadMoreButton onLoadMoreButtonClick={handleLoadMoreButtonClick} />
      }
    </div>
  );
}
export default Comments;