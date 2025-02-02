import { BASE_URL, REQUEST_TIMEOUT } from '@/constants/const';
import axios, { AxiosInstance } from 'axios';

// %======================== api ========================% //

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};