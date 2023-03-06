import React from 'react';

import GalleriesTabs from '@/components/tabs/GalleriesTabs';
import { StyledGalleriesContainer } from '@/styles/layout';
import { StyledGalleriesHeading } from '@/styles/texts';

const Galleries: React.FC = () => {
  return (
    <StyledGalleriesContainer data-testid="galleries">
      <StyledGalleriesHeading>Photos</StyledGalleriesHeading>
      <GalleriesTabs />
    </StyledGalleriesContainer>
  );
};

export default Galleries;
