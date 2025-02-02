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