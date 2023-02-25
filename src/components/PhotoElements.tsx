import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FavoriteIcon from '@/components/FavoriteIcon';
import { useAppSelector } from '@/store';
import {
  addToFavorites,
  removeFromFavorites,
  selectIsPhotoInFavorites,
  selectPhoto,
  selectPhotoSize,
  selectSelectedPhoto,
  unselectPhoto,
} from '@/store/photosSlice';
import {
  ActionWrapper,
  InfoActionWrapper,
  InfoWrapper,
  PhotoCaption,
  PhotoFigure,
  PhotoImage,
  PhotoWrapper,
} from '@/styles/photos';
import { GridPhotoProps } from '@/types';

const PhotoElements: React.FC<GridPhotoProps> = ({ photo, isInGrid }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const photoSize = useAppSelector(selectPhotoSize);
  const selectedPhoto = useAppSelector(selectSelectedPhoto);
  const isVertical = photo ? photo.dimensions.height > photo.dimensions.width : false;
  const isFavorite = useAppSelector(selectIsPhotoInFavorites(photo.id));

  const handleSelectPhoto = () => {
    isInGrid
      ? selectedPhoto?.id === photo.id
        ? dispatch(unselectPhoto())
        : dispatch(selectPhoto(photo))
      : null;
  };

  const handleFavoritePhoto = () => {
    isFavorite ? dispatch(removeFromFavorites(photo)) : dispatch(addToFavorites(photo));
  };

  const photoWrapperClasses = [
    'photo-wrapper',
    isInGrid ? 'photo-in-grid' : '',
    photo.id === selectedPhoto?.id ? 'is-active-photo' : '',
  ].join(' ');

  const photoClasses = ['photo', isInGrid ? 'photo-in-grid' : ''].join(' ');

  const photoCaptionClasses = [
    'photo-caption',
    'bold',
    'dark',
    isInGrid ? 'photo-in-grid' : '',
  ].join(' ');

  return (
    <PhotoFigure className={isInGrid ? 'photo-in-grid' : ''}>
      <PhotoWrapper
        className={photoWrapperClasses}
        onClick={handleSelectPhoto}
        role="listitem"
        loaded={loaded}
        aria-label="Photo from gallery"
      >
        <PhotoImage
          src={photo.url}
          className={photoClasses}
          alt={photo.description}
          loaded={loaded}
          isVertical={isVertical}
          onLoad={() => setLoaded(true)}
        />
      </PhotoWrapper>
      <InfoActionWrapper className={isInGrid ? 'photo-in-grid' : ''}>
        <InfoWrapper className={isInGrid ? 'photo-in-grid' : ''}>
          <PhotoCaption className={photoCaptionClasses}>{photo.filename}</PhotoCaption>
          <p className="photo-info semibold light">{photoSize[photo.id]}</p>
        </InfoWrapper>
        <ActionWrapper
          className={isInGrid ? 'photo-in-grid' : ''}
          onClick={handleFavoritePhoto}
        >
          <FavoriteIcon isFavorite={isFavorite} />
        </ActionWrapper>
      </InfoActionWrapper>
    </PhotoFigure>
  );
};

export default PhotoElements;
