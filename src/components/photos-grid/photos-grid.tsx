import { DATA } from '@/mock/data';
import Photo from '../photo/photo';
import UploadForm from '../upload-form/upload-form';
import './photos-grid.scss';

// $======================== PhotosGrid ========================$ //

function PhotosGrid(): React.JSX.Element {
  return (
    <ul className='photos-grid'>
      {DATA.map(({ id, url, description, likes, comments }) => (
        <Photo
          key={id}
          url={url}
          description={description}
          likes={likes}
          comments={comments}
        />
      ))}
      <li className='photos-grid__upload-form'>
        <UploadForm />
      </li>
    </ul>
  );
}
export default PhotosGrid;