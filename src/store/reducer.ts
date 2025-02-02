import { DATA } from '@/mock/data';
import { PhotoType } from '@/types';
import { getPhotoById } from '@/utils/common-utils';
import { createReducer } from '@reduxjs/toolkit';
import { closeModalAction, openModalAction } from './actions';

// %======================== reducer ========================% //
type InitialState = {
  data: PhotoType[],
  isModalOpen: boolean,
  currentPhoto: PhotoType | undefined,
};

const initialState: InitialState = {
  data: DATA,
  isModalOpen: false,
  currentPhoto: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModalAction, (state, action) => {
      state.isModalOpen = true;
      state.currentPhoto = getPhotoById(state.data, action.payload);
    })
    .addCase(closeModalAction, (state) => {
      state.isModalOpen = false;
    });
});