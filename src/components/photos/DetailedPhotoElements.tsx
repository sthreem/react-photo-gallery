import React from 'react';

import { useAppSelector } from '@/store';
import { selectInfoToDisplay } from '@/store/photosSlice';
import { StyledPhotoInfos } from '@/styles/photos';
import {
  StyledDescription,
  StyledInfoKey,
  StyledPhotoInfoHeading,
  StyledPhotoInfoRow,
} from '@/styles/texts';
import { GridPhotoProps } from '@/types';

const DetailedPhotoElements: React.FC<GridPhotoProps> = ({ photo }) => {
  const infoToDisplay = useAppSelector(selectInfoToDisplay);

  return (
    <StyledPhotoInfos data-testid="detailed-photo-elements">
      <StyledPhotoInfoHeading>Information</StyledPhotoInfoHeading>

      {infoToDisplay.map((info, index) => (
        <StyledPhotoInfoRow
          key={`photo-info-row-${index}`}
          data-testid={`photo-info-row-${index}`}
        >
          <StyledInfoKey>{`${info.key}`}</StyledInfoKey>
          <span>{`${info.value}`}</span>
        </StyledPhotoInfoRow>
      ))}

      {photo.description && (
        <>
          <StyledPhotoInfoHeading>Description</StyledPhotoInfoHeading>
          <StyledDescription data-testid="photo-description">
            {photo.description}
          </StyledDescription>
        </>
      )}
    </StyledPhotoInfos>
  );
};

export default DetailedPhotoElements;
