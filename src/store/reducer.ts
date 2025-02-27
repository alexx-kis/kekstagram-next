import { DataStatus, ModalType, PostingStatus, SortingOption } from '@/constants/const';
import { PhotoType } from '@/types';
import { getPhotoById, sortPhotos } from '@/utils/common-utils';
import { createReducer } from '@reduxjs/toolkit';
import { changeSortingOptionAction, closeModalAction, openModalAction, removeCurrentPhoto, removeUploadingImageSrc, resetPostingStatus, setCurrentPhoto, setUploadingImageSrc } from './actions';
import { fetchPhotos, postUploadData } from './api-actions';

// %======================== reducer ========================% //
type InitialState = {
  data: PhotoType[],
  openModal: ModalType | null,
  currentPhoto: PhotoType | undefined,
  sortingOption: SortingOption,
  sortedPhotos: PhotoType[];
  dataStatus: DataStatus;
  uploadingImageSrc: string | null;
  postingStatus: PostingStatus;
};

const initialState: InitialState = {
  data: [],
  openModal: null,
  currentPhoto: undefined,
  sortingOption: SortingOption.Default,
  sortedPhotos: [],
  dataStatus: DataStatus.Loading,
  uploadingImageSrc: '',
  postingStatus: PostingStatus.Unknown
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModalAction, (state, action) => {
      state.openModal = action.payload;
      document.body.style.overflow = 'hidden';
    })
    .addCase(closeModalAction, (state) => {
      state.openModal = null;
      document.body.style.overflow = '';
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
    })
    .addCase(removeUploadingImageSrc, (state) => {
      state.uploadingImageSrc = null;
    })
    .addCase(postUploadData.pending, (state) => {
      state.postingStatus = PostingStatus.Posting;
    })
    .addCase(postUploadData.fulfilled, (state) => {
      state.postingStatus = PostingStatus.Posted;
      state.openModal = ModalType.UploadStatusBanner;
      state.uploadingImageSrc = null;
    })
    .addCase(postUploadData.rejected, (state) => {
      state.postingStatus = PostingStatus.Error;
      state.openModal = ModalType.UploadStatusBanner;
      state.uploadingImageSrc = null;
    })
    .addCase(resetPostingStatus, (state) => {
      state.postingStatus = PostingStatus.Unknown;
    });
});