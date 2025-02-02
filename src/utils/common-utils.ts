import { SortingOption, RANDOM_PHOTOS_AMOUNT } from '@/constants/const';
import { PhotoType } from '@/types';

// %======================== common utils ========================% //

export const isEscKey = (e: KeyboardEvent) => e.key === 'Escape';

export const getPhotoById = (data: PhotoType[], id: number): PhotoType | undefined => {
  return data.find((photo) => photo.id === id);
};

export const comparePhotosByCommentsAmount = (a: PhotoType, b: PhotoType) => b.comments.length - a.comments.length;

export const sortPhotos = (photos: PhotoType[], sortingOption: SortingOption): PhotoType[] => {
  switch (sortingOption) {
    case SortingOption.Default:
      return photos;
    case SortingOption.Random:
      return [...photos].sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTOS_AMOUNT);
    case SortingOption.Featured:
      return [...photos].sort(comparePhotosByCommentsAmount);
    default:
      return photos;
  }
};