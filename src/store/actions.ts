import { ModalType, SortingOption } from '@/constants/const';
import { createAction } from '@reduxjs/toolkit';

// %======================== actions ========================% //

export const openModalAction = createAction<ModalType>('modal/openModal');
export const closeModalAction = createAction('modal/closeModal');

export const changeSortingOptionAction = createAction<SortingOption>('sorting/changeSortingOption');

export const setCurrentPhoto = createAction<number>('preview/setCurrentPhoto');
export const removeCurrentPhoto = createAction('preview/removeCurrentPhoto');