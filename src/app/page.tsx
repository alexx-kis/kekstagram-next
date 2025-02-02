'use client';

import ErrorScreen from '@/components/error-screen/error-screen';
import Filter from '@/components/filter/filter';
import Modal from '@/components/modal/modal';
import PhotosGrid from '@/components/photos-grid/photos-grid';
import Preloader from '@/components/preloader/preloader';
import { DataStatus } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getDataStatus } from '@/store/selectors';

// #======================== HomePage ========================# //

export default function Home() {
  const dataStatus = useAppSelector(getDataStatus);
  if (dataStatus === DataStatus.Loading) {
    return <Preloader />;
  }
  if (dataStatus === DataStatus.Error) {
    return <ErrorScreen />;
  }
  return (
    <div className='container'>
      <Filter />
      <PhotosGrid />
      <Modal />
    </div>
  );
}
