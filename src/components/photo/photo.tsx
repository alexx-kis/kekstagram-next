'use client';

import { basePath, ModalType } from '@/constants/const';
import { useAppDispatch } from '@/hooks';
import { openModalAction, setCurrentPhoto } from '@/store/actions';
import { CommentType } from '@/types';
import Image from 'next/image';
import './photo.scss';

// ^======================== Photo ========================^ //

type PhotoProps = {
  id: number;
  url: string;
  description: string;
  comments: CommentType[];
  likes: number;
};

function Photo(photoProps: PhotoProps): React.JSX.Element {
  const { id, url, description, comments, likes } = photoProps;

  const dispatch = useAppDispatch();

  const handlePhotoClick = () => {
    dispatch(openModalAction(ModalType.Preview));
    dispatch(setCurrentPhoto(id))
  };

  return (
    <div
      className='photo'
      onClick={handlePhotoClick}
    >
      <Image
        className='photo__image'
        src={url}
        alt={description}
        width={185}
        height={185}
      />
      <div className='photo__info'>
        <div className='photo__comments'>
          <Image
            className='photo__comments-icon'
            src={`${basePath}/img/icons/message-icon.svg`}
            alt=''
            width={20}
            height={16}
          />
          <p className='photo__comments-amount'>
            {comments.length}
          </p>
        </div>
        <div className='photo__likes'>
          <Image
            className='photo__likes-icon'
            src={`${basePath}/img/icons/heart-icon-white.svg`}
            alt=''
            width={20}
            height={16}
          />
          <p className='photo__likes-amount'>
            {likes}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Photo;