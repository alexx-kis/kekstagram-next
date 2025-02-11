import { APIRoute } from '@/constants/const';
import { AppDispatch, AppState, PhotoType, UploadDataType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// %======================== api-actions ========================% //

type AsyncThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

export const fetchPhotos = createAsyncThunk<
  PhotoType[],
  undefined,
  AsyncThunkType
>('photos/fetchPhotos', async (_arg, { extra: api }) => {
  const { data } = await api.get<PhotoType[]>(APIRoute.GetData);
  return data;
});

export const postUploadData = createAsyncThunk<
  void,
  UploadDataType,
  AsyncThunkType
>('upload/postUploadData', async (uploadData, { extra: api }) => {
  const { data } = await api.post('https://jsonplaceholder.typicode.com/posts', uploadData);
  return data;
});