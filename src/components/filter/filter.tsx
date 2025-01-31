'use client';

import { FilterOption } from '@/constants/const';
import { useState } from 'react';
import FilterButton from '../filter-button/filter-button';
import './filter.scss';

// ^======================== Filter ========================^ //

function Filter(): React.JSX.Element {

  const [activeOption, setActiveOption] = useState(FilterOption.Default);

  const handleFilterButtonClick = (name: FilterOption) => {
    setActiveOption(name);
  };

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
              isActive={activeOption === item}
              name={item}
              onFilterButtonClick={() => {
                handleFilterButtonClick(item);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Filter;