'use client';

import ErrorBanner from '@/components/error-banner/error-banner';
import PhotosGrid from '@/components/photos-grid/photos-grid';
import Preloader from '@/components/preloader/preloader';
import Modal from '@/components/preview/preview';
import Sorting from '@/components/sorting/sorting';
import UploadModal from '@/components/upload-modal/upload-modal';
import SuccessBanner from '@/components/upload-status-banner/upload-status-banner';
import { DataStatus } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getDataStatus } from '@/store/selectors';

// #======================== HomePage ========================# //

export default function Home() {
  const dataStatus = useAppSelector(getDataStatus);
  if (dataStatus === DataStatus.Loading) {
    return <Preloader />;
  }
  return (
    <div className='container'>
      <Sorting />
      <PhotosGrid />
      <Modal />
      <UploadModal />
      <SuccessBanner />
      <ErrorBanner />
    </div>
  );
}
