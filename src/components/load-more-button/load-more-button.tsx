import './load-more-button.scss';

// ^======================== LoadMoreButton ========================^ //

type LoadMoreButtonProps = {
  onLoadMoreButtonClick: () => void;
};

function LoadMoreButton(loadMoreButtonProps: LoadMoreButtonProps): React.JSX.Element {

  const { onLoadMoreButtonClick } = loadMoreButtonProps;

  return (
    <button
      type='button'
      className='load-more-button'
      onClick={onLoadMoreButtonClick}
    >
      Load more
    </button>
  );
}
export default LoadMoreButton;