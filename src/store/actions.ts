import { createAction } from '@reduxjs/toolkit';

// %======================== actions ========================% //

export const openModalAction = createAction('modal/openModal');
export const closeModalAction = createAction('modal/closeModal');
export const setCurrentPhotoIdAction = createAction<string>('photos/setCurrentPhotoId')