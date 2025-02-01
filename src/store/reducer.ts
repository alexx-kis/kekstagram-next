import { createReducer } from '@reduxjs/toolkit';
import { closeModalAction, openModalAction, setCurrentPhotoIdAction } from './actions';

// %======================== reducer ========================% //
const initialState = {
  isModalOpen: false,
  currentPhotoId: '',
};
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModalAction, (state) => {
      state.isModalOpen = true;
    })
    .addCase(closeModalAction, (state) => {
      state.isModalOpen = false;
      state.currentPhotoId = '';
    })
    .addCase(setCurrentPhotoIdAction, (state, action) => {
      state.currentPhotoId = action.payload;
    });
});