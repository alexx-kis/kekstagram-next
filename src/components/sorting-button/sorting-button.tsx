import { SortingOption } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSortingOption } from '@/store/selectors';
import clsx from 'clsx';
import './sorting-button.scss';
import { changeSortingOptionAction } from '@/store/actions';

// ^======================== SortingButton ========================^ //

type SortingButtonProps = {
  bemClass: string;
  name: string;
};

function SortingButton(sortingButtonProps: SortingButtonProps): React.JSX.Element {
  const { bemClass, name } = sortingButtonProps;
  const currentSortingOption = useAppSelector(getSortingOption);
  const dispatch = useAppDispatch();

  const handleSortingButtonClick = () => {
    dispatch(changeSortingOptionAction(name as SortingOption));
  };

  return (
    <button
      className={clsx(
        `${bemClass} sorting-button`,
        { '_active': currentSortingOption === name }
      )}
      onClick={handleSortingButtonClick}
    >
      {name}
    </button>
  );
}
export default SortingButton;