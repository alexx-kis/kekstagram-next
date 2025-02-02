import { createAction } from '@reduxjs/toolkit';

// %======================== actions ========================% //

export const openModalAction = createAction<number>('modal/openModal');
export const closeModalAction = createAction('modal/closeModal');