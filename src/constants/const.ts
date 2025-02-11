export const basePath = process.env.NODE_ENV === 'production'
  ? '/kekstagram-next'
  : '';

export enum SortingOption {
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

export enum FilterEffect {
  Default = 'default',
  Chrome = 'chrome',
  Sepia = 'sepia',
  Marvin = 'marvin',
  Phobos = 'phobos',
  Heat = 'heat'
}

export enum ModalType {
  Preview = 'preview',
  Upload = 'upload',
}