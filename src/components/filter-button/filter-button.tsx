import { FilterOption } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getFilterOption } from '@/store/selectors';
import clsx from 'clsx';
import './filter-button.scss';
import { changeFilterOptionAction } from '@/store/actions';

// ^======================== FilterButton ========================^ //

type FilterButtonProps = {
  bemClass: string;
  name: string;
};

function FilterButton(filterButtonProps: FilterButtonProps): React.JSX.Element {
  const { bemClass, name } = filterButtonProps;
  const currentFilterOption = useAppSelector(getFilterOption);
  const dispatch = useAppDispatch();

  const handleFilterButtonClick = () => {
    dispatch(changeFilterOptionAction(name as FilterOption));
  };

  return (
    <button
      className={clsx(
        `${bemClass} filter-button`,
        { '_active': currentFilterOption === name }
      )}
      onClick={handleFilterButtonClick}
    >
      {name}
    </button>
  );
}
export default FilterButton;