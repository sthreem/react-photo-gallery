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
    <StyledDetailsWrapper
      isSelected={!!selectedPhoto}
      data-testid="photo-details-wrapper"
    >
      {/* Display relevant info when no photo selected */}
      {!selectedPhoto && <NoSelectedPhoto />}

      {/* Display photo info when photo selected */}
      {selectedPhoto && (
        <>
          <CloseMenuButton data-testid="close-menu-button" />
          <BasicPhotoElements photo={selectedPhoto} isInGrid={false} />
          <DetailedPhotoElements
            photo={selectedPhoto}
            data-testid="detailed-photo-elements"
          />
          <DeletePhotoButton photo={selectedPhoto} />
        </>
      )}
    </StyledDetailsWrapper>
  );
};

export default PhotoDetails;
