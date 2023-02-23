import React, { useState } from 'react';
import { GridPhotoProps } from '@/types'
import { PhotoFigure, PhotoWrapper, Photo, PhotoCaption } from '@/styles/photos'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store';
import { selectPhoto, selectPhotoSize, selectSelectedPhoto } from '@/store/photosSlice';

const GridPhoto: React.FC<GridPhotoProps> = ({ photo }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const photoSize = useAppSelector(selectPhotoSize);
  const selectedPhoto = useAppSelector(selectSelectedPhoto);

  const handleSelectPhoto = () => {
    dispatch(selectPhoto(photo));
  };

  return (
    <PhotoFigure>
      <PhotoWrapper
        className={`photo-wrapper ${(photo.id === selectedPhoto?.id) ? 'is-active-photo' : ''}`}
        onClick={handleSelectPhoto}
        role="listitem"
        aria-selected={photo.id === selectedPhoto?.id ? 'true' : 'false'}
        aria-label={photo.description} >
        <Photo
          src={photo.url}
          className='photo'
          alt={photo.description}
          loaded={loaded}
          onLoad={() => setLoaded(true)} />
      </PhotoWrapper>
      <PhotoCaption
        className="photo-caption body-semibold-dark">
        {photo.filename}
      </PhotoCaption>
      <p
        className='photo-info body'>
        {photoSize[photo.id]}
      </p>
    </PhotoFigure>
  );
};

export default GridPhoto;