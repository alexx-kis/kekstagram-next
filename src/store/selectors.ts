import { AppState } from '@/types';

// %======================== selectors ========================% //
export const getOpenModal = (state: AppState) => state.openModal;
export const getCurrentPhoto = (state: AppState) => state.currentPhoto;
export const getData = (state: AppState) => state.data;
export const getSortingOption = (state: AppState) => state.sortingOption;
export const getSortedPhotos = (state: AppState) => state.sortedPhotos;
export const getDataStatus = (state: AppState) => state.dataStatus;
export const getUploadingImageSrc = (state: AppState) => state.uploadingImageSrc;