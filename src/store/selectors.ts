import { AppState } from '@/types';

// %======================== selectors ========================% //

export const getIsModalOpen = (state: AppState) => state.isModalOpen;
export const getCurrentPhotoId = (state: AppState) => state.currentPhotoId;