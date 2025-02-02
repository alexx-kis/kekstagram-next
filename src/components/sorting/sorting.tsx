'use client';

import { SortingOption } from '@/constants/const';
import SortingButton from '../sorting-button/sorting-button';
import './sorting.scss';

// ^======================== Sorting ========================^ //

function Sorting(): React.JSX.Element {
  return (
    <div className='sorting'>
      <h2 className='sorting__heading hidden'>
        Photos Sorting
      </h2>
      <ul className='sorting__list'>
        {Object.values(SortingOption).map((item) => (
          <li key={item} className='sorting__item'>
            <SortingButton
              bemClass='sorting__button'
              name={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sorting;