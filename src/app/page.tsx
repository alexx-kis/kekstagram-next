import Filter from '@/components/filter/filter';
import ImagesGrid from '@/components/images-grid/images-grid';

// #======================== HomePage ========================# //

export default function Home() {
  return (
    <div className='container'>
      <Filter />
      <ImagesGrid />
    </div>
  );
}
