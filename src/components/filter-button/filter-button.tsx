import clsx from 'clsx';
import './filter-button.scss';

// ^======================== FilterButton ========================^ //
type FilterButtonProps = {
  bemClass: string;
  name: string;
  onFilterButtonClick: () => void;
  isActive: boolean;
};
function FilterButton(filterButtonProps: FilterButtonProps): React.JSX.Element {
  const { bemClass, name, onFilterButtonClick, isActive } = filterButtonProps;
  return (
    <button
      className={clsx(
        `${bemClass} filter-button`,
        { '_active': isActive }
      )}
      onClick={onFilterButtonClick}
    >
      {name}
    </button>
  );
}
export default FilterButton;