import React from 'react';

import CloseMenuButton from '@/components/buttons/CloseMenuButton';
import DeletePhotoButton from '@/components/buttons/DeletePhotoButton';
import NoSelectedPhoto from '@/components/NoSelectedPhoto';
import BasicPhotoElements from '@/components/photos/BasicPhotoElements';
import DetailedPhotoElements from '@/components/photos/DetailedPhotoElements';
import { useAppSelector } from '@/store';
import { selectSelectedPhoto } from '@/store/photosSlice';
import { StyledDetailsWrapper } from '@/styles/photos';

const PhotoDetails: React.FC = () => {
  const selectedPhoto = useAppSelector(selectSelectedPhoto);

  return (
    <StyledDetailsWrapper isSelected={!!selectedPhoto} data-testid="photo-details">
      {/* Display relevant info when no photo selected */}
      {!selectedPhoto && <NoSelectedPhoto data-testid="no-selected-photo" />}

      {/* Display photo info when photo selected */}
      {selectedPhoto && (
        <>
          <CloseMenuButton data-testid="close-menu-button" />
          <BasicPhotoElements
            photo={selectedPhoto}
            isInGrid={false}
            data-testid="basic-photo-elements"
          />
          <DetailedPhotoElements
            photo={selectedPhoto}
            data-testid="detailed-photo-elements"
          />
          <DeletePhotoButton
            photo={selectedPhoto}
            data-testid={`delete-photo-button-${selectedPhoto.id}`}
          />
        </>
      )}
    </StyledDetailsWrapper>
  );
};

export default PhotoDetails;
