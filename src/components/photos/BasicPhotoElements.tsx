import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FavoritePhotoButton from '@/components/buttons/FavoritePhotoButton';
import { useAppSelector } from '@/store';
import {
  selectIsPhotoInFavorites,
  selectPhoto,
  selectPhotoSize,
  selectSelectedPhoto,
  unselectPhoto,
} from '@/store/photosSlice';
import {
  StyledImage,
  StyledImageWrapper,
  StyledInfoActionWrapper,
  StyledInfoWrapper,
  StyledPhotoCaption,
  StyledPhotoFigure,
} from '@/styles/photos';
import { StyledPhotoSize } from '@/styles/texts';
import { GridPhotoProps } from '@/types';

const BasicPhotoElements: React.FC<GridPhotoProps> = ({ photo, isInGrid = false }) => {
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

  return (
    <StyledPhotoFigure isInGrid={isInGrid} data-testid={`basic-photo-figure-${photo.id}`}>
      {/* Photo visuals */}
      <StyledImageWrapper
        isActive={photo.id === selectedPhoto?.id}
        isInGrid={isInGrid}
        onClick={handleSelectPhoto}
        role="listitem"
        loaded={loaded}
        aria-label="Photo from gallery"
        data-testid={`photo-image-wrapper-${photo.id}`}
      >
        <StyledImage
          src={photo.url}
          isInGrid={isInGrid}
          className="photo"
          alt={photo.description}
          loaded={loaded}
          isVertical={isVertical}
          onLoad={() => setLoaded(true)}
          data-testid={`photo-image-${photo.id}`}
        />
      </StyledImageWrapper>

      {/* Photo basic info and favorite action when not in grid */}
      <StyledInfoActionWrapper isInGrid={isInGrid}>
        <StyledInfoWrapper>
          <StyledPhotoCaption isInGrid={isInGrid}>{photo.filename}</StyledPhotoCaption>
          <StyledPhotoSize>{photoSize[photo.id]}</StyledPhotoSize>
        </StyledInfoWrapper>
        <FavoritePhotoButton
          isFavorite={isFavorite}
          isInGrid={isInGrid}
          photo={photo}
          data-testid={`favorite-photo-button-${photo.id}`}
        />
      </StyledInfoActionWrapper>
    </StyledPhotoFigure>
  );
};

export default BasicPhotoElements;
