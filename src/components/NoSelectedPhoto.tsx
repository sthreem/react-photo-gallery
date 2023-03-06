import React from 'react';

import { StyledNoPhotoSelectedHeading } from '@/styles/texts';

const NoSelectedPhoto: React.FC = () => {
  return (
    <StyledNoPhotoSelectedHeading data-testid="no-selected-photo-heading">
      Select a photo to see details
    </StyledNoPhotoSelectedHeading>
  );
};

export default NoSelectedPhoto;
