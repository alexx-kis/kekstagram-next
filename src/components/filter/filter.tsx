'use client';

import { FilterOption } from '@/constants/const';
import FilterButton from '../filter-button/filter-button';
import './filter.scss';

// ^======================== Filter ========================^ //

function Filter(): React.JSX.Element {
  return (
    <div className='filter'>
      <h2 className='filter__heading hidden'>
        Photos Filter
      </h2>
      <ul className='filter__list'>
        {Object.values(FilterOption).map((item) => (
          <li key={item} className='filter__item'>
            <FilterButton
              bemClass='filter__button'
              name={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Filter;