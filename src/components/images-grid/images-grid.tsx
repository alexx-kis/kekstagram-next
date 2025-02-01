import { DATA } from '@/mock/data';
import Image from 'next/image';
import './images-grid.scss';

// $======================== ImagesGrid ========================$ //

function ImagesGrid(): React.JSX.Element {
  return (
    <ul className='images-grid'>
      {DATA.map(({ id, url, description }) => (
        <li
          key={id}
          className='images-grid__item'
        >
          <Image
            src={url}
            alt={description}
            width={185}
            height={185}
          />
        </li>
      ))}
    </ul>
  );
}
export default ImagesGrid;