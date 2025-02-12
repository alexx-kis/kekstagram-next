import { createAPI } from '@/services/api';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

// %======================== store ========================% //

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});