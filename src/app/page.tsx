import Filter from '@/components/filter/filter';
import PhotosGrid from '@/components/photos-grid/photos-grid';
import Modal from '@/components/modal/modal';

// #======================== HomePage ========================# //

export default function Home() {
  return (
    <div className='container'>
      <Filter />
      <PhotosGrid />
      <Modal />
    </div>
  );
}
