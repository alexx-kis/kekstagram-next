export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';

export enum FilterOption {
  Default = 'Default',
  Random = 'Random',
  Featured = 'Featured'
}