import React from 'react';
import { useDispatch } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '@/store/photosSlice';
import {
  StyledButton,
  StyledFavoritePhotoButtonWrapper,
  StyledSvg,
} from '@/styles/photos';
import { FavoriteButtonProps } from '@/types';

const FavoritePhotoButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  isInGrid,
  photo,
}) => {
  const dispatch = useDispatch();
  const handleFavoritePhoto = () => {
    isFavorite ? dispatch(removeFromFavorites(photo)) : dispatch(addToFavorites(photo));
  };

  return (
    <StyledFavoritePhotoButtonWrapper
      isInGrid={isInGrid}
      data-testid={`favorite-photo-button-${photo.id}`}
    >
      <StyledButton
        onClick={handleFavoritePhoto}
        role="button"
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        tabIndex={0}
        data-testid={`favorite-button-${photo.id}`}
      >
        <StyledSvg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-checked={isFavorite}
          role="checkbox"
        >
          <title>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</title>
          <desc>
            A heart icon indicating whether the current item is in the user favorites
            list.
          </desc>
          <path
            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
            stroke={isFavorite ? '#E389B9' : '#64748B'}
            fill={isFavorite ? '#E389B9' : 'none'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </StyledSvg>
      </StyledButton>
    </StyledFavoritePhotoButtonWrapper>
  );
};

export default FavoritePhotoButton;
