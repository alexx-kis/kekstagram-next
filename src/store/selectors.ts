import { AppState } from '@/types';

// %======================== selectors ========================% //

export const getIsModalOpen = (state: AppState) => state.isModalOpen;
export const getCurrentPhoto = (state: AppState) => state.currentPhoto;
export const getData = (state: AppState) => state.data;