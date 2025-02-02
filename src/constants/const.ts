export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';

export enum FilterOption {
  Default = 'Default',
  Random = 'Random',
  Featured = 'Featured'
}

export const SHOWN_COMMENTS_STEP = 5;

export const RANDOM_PHOTOS_AMOUNT = 10;

export const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
export const REQUEST_TIMEOUT = 5000;
export enum APIRoute {
  GetData = '/data',
  PostData = '/'
}

export enum DataStatus {
  Unknown = 'Unknown',
  Loading = 'Loading',
  Loaded = 'Loaded',
  Error = 'Error',
}