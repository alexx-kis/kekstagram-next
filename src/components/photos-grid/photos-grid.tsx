'use client';

import { useAppSelector } from '@/hooks';
import { getSortedPhotos } from '@/store/selectors';
import Photo from '../photo/photo';
import UploadForm from '../upload-form/upload-form';
import './photos-grid.scss';

// $======================== PhotosGrid ========================$ //

function PhotosGrid(): React.JSX.Element {
  const sortedPhotos = useAppSelector(getSortedPhotos);

  return (
    <ul className='photos-grid'>
      {sortedPhotos.map(({ id, url, description, likes, comments }) => (
        <li key={id} className='photos-grid__item'>
          <Photo
            id={id}
            url={url}
            description={description}
            likes={likes}
            comments={comments}
          />
        </li>
      ))}
      <li className='photos-grid__upload-form'>
        <UploadForm />
      </li>
    </ul>
  );
}
export default PhotosGrid;