import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePhoto } from '@/store/photosSlice';
import { StyledDeleteButton } from '@/styles/photos';
import { GridPhotoProps } from '@/types';

const DeletePhotoButton: React.FC<GridPhotoProps> = ({ photo }) => {
  const dispatch = useDispatch();
  const handleDeletePhoto = () => {
    dispatch(deletePhoto(photo));
  };

  return (
    <StyledDeleteButton
      onClick={handleDeletePhoto}
      aria-label="Delete photo"
      role="button"
      tabIndex={0}
      data-testid={`delete-photo-button-${photo.id}`}
    >
      Delete
    </StyledDeleteButton>
  );
};

export default DeletePhotoButton;
