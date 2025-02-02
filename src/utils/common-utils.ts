import { PhotoType } from '@/types';

// %======================== common utils ========================% //

export const isEscKey = (e: KeyboardEvent) => e.key === 'Escape';

export const getPhotoById = (data: PhotoType[], id: number): PhotoType | undefined => {
  return data.find((photo) => photo.id === id);
};