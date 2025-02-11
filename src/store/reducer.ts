import { DataStatus, ModalType, SortingOption } from '@/constants/const';
import { PhotoType } from '@/types';
import { getPhotoById, sortPhotos } from '@/utils/common-utils';
import { createReducer } from '@reduxjs/toolkit';
import { changeSortingOptionAction, closeModalAction, openModalAction, removeCurrentPhoto, setCurrentPhoto, setUploadingImageSrc } from './actions';
import { fetchPhotos } from './api-actions';

// %======================== reducer ========================% //
type InitialState = {
  data: PhotoType[],
  openModal: ModalType | null,
  currentPhoto: PhotoType | undefined,
  sortingOption: SortingOption,
  sortedPhotos: PhotoType[];
  dataStatus: DataStatus;
  uploadingImageSrc: string | null;
};

const initialState: InitialState = {
  data: [],
  openModal: null,
  currentPhoto: undefined,
  sortingOption: SortingOption.Default,
  sortedPhotos: [],
  dataStatus: DataStatus.Loading,
  uploadingImageSrc: ''
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModalAction, (state, action) => {
      state.openModal = action.payload;
    })
    .addCase(closeModalAction, (state) => {
      state.openModal = null;
    })
    .addCase(setCurrentPhoto, (state, action) => {
      state.currentPhoto = getPhotoById(state.data, action.payload);
    })
    .addCase(removeCurrentPhoto, (state) => {
      state.currentPhoto = undefined;
    })
    .addCase(changeSortingOptionAction, (state, action) => {
      state.sortingOption = action.payload;
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
    })
    .addCase(setUploadingImageSrc, (state, action) => {
      state.uploadingImageSrc = action.payload;
    });
});