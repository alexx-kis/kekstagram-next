import { FilterOption } from '@/constants/const';
import { DATA } from '@/mock/data';
import { PhotoType } from '@/types';
import { getPhotoById, sortPhotos } from '@/utils/common-utils';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilterOptionAction, closeModalAction, openModalAction } from './actions';

// %======================== reducer ========================% //
type InitialState = {
  data: PhotoType[],
  isModalOpen: boolean,
  currentPhoto: PhotoType | undefined,
  filterOption: FilterOption,
  sortedPhotos: PhotoType[];
};

const initialState: InitialState = {
  data: DATA,
  isModalOpen: false,
  currentPhoto: undefined,
  filterOption: FilterOption.Default,
  sortedPhotos: DATA,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModalAction, (state, action) => {
      state.isModalOpen = true;
      state.currentPhoto = getPhotoById(state.data, action.payload);
    })
    .addCase(closeModalAction, (state) => {
      state.isModalOpen = false;
    })
    .addCase(changeFilterOptionAction, (state, action) => {
      state.filterOption = action.payload;
      state.sortedPhotos = sortPhotos(state.data, action.payload);
    });

});