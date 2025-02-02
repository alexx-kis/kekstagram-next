import { DataStatus, FilterOption } from '@/constants/const';
import { PhotoType } from '@/types';
import { getPhotoById, sortPhotos } from '@/utils/common-utils';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilterOptionAction, closeModalAction, openModalAction } from './actions';
import { fetchPhotos } from './api-actions';

// %======================== reducer ========================% //
type InitialState = {
  data: PhotoType[],
  isModalOpen: boolean,
  currentPhoto: PhotoType | undefined,
  filterOption: FilterOption,
  sortedPhotos: PhotoType[];
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  data: [],
  isModalOpen: false,
  currentPhoto: undefined,
  filterOption: FilterOption.Default,
  sortedPhotos: [],
  dataStatus: DataStatus.Loading
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
    })
    .addCase(fetchPhotos.pending, (state) => {
      state.dataStatus = DataStatus.Loading;
    })
    .addCase(fetchPhotos.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.Loaded;
      state.data = action.payload;
      state.sortedPhotos = action.payload;
    })
    .addCase(fetchPhotos.rejected, (state) => {
      state.dataStatus = DataStatus.Error;
    });
});