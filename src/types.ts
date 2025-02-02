// %======================== types ========================% //

import { store } from './store';

export type CommentType = {
  id: number;
  avatar: string;
  message: string;
  name: string;
};

export type PhotoType = {
  id: number;
  url: string;
  likes: number;
  comments: CommentType[];
  description: string;
};

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;