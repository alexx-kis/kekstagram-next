import { FilterOption, RANDOM_PHOTOS_AMOUNT } from '@/constants/const';
import { PhotoType } from '@/types';

// %======================== common utils ========================% //

export const isEscKey = (e: KeyboardEvent) => e.key === 'Escape';

export const getPhotoById = (data: PhotoType[], id: number): PhotoType | undefined => {
  return data.find((photo) => photo.id === id);
};

export const comparePhotosByCommentsAmount = (a: PhotoType, b: PhotoType) => b.comments.length - a.comments.length;

export const sortPhotos = (photos: PhotoType[], filterOption: FilterOption): PhotoType[] => {
  switch (filterOption) {
    case FilterOption.Default:
      return photos;
    case FilterOption.Random:
      return [...photos].sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTOS_AMOUNT);
    case FilterOption.Featured:
      return [...photos].sort(comparePhotosByCommentsAmount);
    default:
      return photos;
  }
};