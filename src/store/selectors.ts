import { AppState } from '@/types';

// %======================== selectors ========================% //

export const getIsModalOpen = (state: AppState) => state.isModalOpen;
export const getCurrentPhoto = (state: AppState) => state.currentPhoto;
export const getData = (state: AppState) => state.data;
export const getFilterOption = (state: AppState) => state.filterOption;
export const getSortedPhotos = (state: AppState) => state.sortedPhotos;
export const getDataStatus = (state: AppState) => state.dataStatus;